import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import { useLocation, useNavigate } from "react-router-dom"
import Cookies from "universal-cookie"
import { useMain } from "./useMain"

const AuthContent = React.createContext()

export function useAuth() {
	return useContext(AuthContent)
}

const AuthProvider = ({ children }) => {
	const { setShowPreloader } = useMain()
	const pathname = useLocation().pathname
	const cookies = new Cookies(null, { path: "/" })
	const [firstLogin, setFirstLogin] = useState(false)
	const defaultFormData = {
		fullname: "",
		email: "",
		password: "",
		rePassword: "",
	}
	const [formData, setFormData] = useState(defaultFormData)
	const [validator, setValidator] = useState(defaultFormData)
	const regExEmail =
		/(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
	const handleFormData = (e) => {
		setFormData((formData) => {
			return { ...formData, [e.target.name]: e.target.value }
		})
		if (
			(e.target.name === "email" && regExEmail.test(e.target.value)) ||
			(e.target.name !== "email" && e?.target.value)
		)
			setValidator((validator) => {
				return { ...validator, [e.target.name]: true }
			})
		else
			setValidator((validator) => {
				return { ...validator, [e.target.name]: undefined }
			})
	}
	const navigate = useNavigate()
	const Toast = Swal.mixin({
		toast: true,
		position: "top-end",
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener("mouseenter", Swal.stopTimer)
			toast.addEventListener("mouseleave", Swal.resumeTimer)
		},
	})
	const [user, setUser] = useState({})
	const [loadingLogin, setLoadingLogin] = useState(false)
	const [loggedIn, setLoggedIn] = useState()
	const authApi = axios.create({
		baseURL: process.env.REACT_APP_ENV_SERVER_URL,
		withCredentials: true,
		headers: cookies.get("cs")
			? {
					Authorization: `Bearer ${cookies.get("cs")}`,
			  }
			: {},
	})
	const loginHandler = (response) => {
		if (response?.data) {
			if (response.data?.csrfToken)
				cookies.set("cs", response.data.csrfToken, {
					path: "/",
					sameSite: "Strict",
					// secure: true,
				})

			setUser(response.data)
			setLoggedIn(true)
			setFormData(defaultFormData)
			setValidator({})
			if (
				pathname.indexOf("signin") !== -1 ||
				pathname.indexOf("signup") !== -1
			)
				navigate("/chat", { replace: true })
		} else
			Toast.fire({
				icon: "error",
				title: "Something went wrong",
			})
	}
	const loginCatchHandler = (e) => {
		if (e.config.url !== "/api/users/get/") {
			if (e.response && e.response.data && e.response.data.message)
				Toast.fire({
					icon: "error",
					title: e.response.data.message,
				})
			else
				Toast.fire({
					icon: "error",
					title: "Something went wrong",
				})
			setLoggedIn(false)
			setValidator((validator) => {
				return {
					...validator,
					email: false,
					emailFeedback:
						e?.response.data.message &&
						e.response.data.message === "Email already exists"
							? e.response.data.message
							: "Invalid Credentials",
					password:
						e?.response.data.message &&
						e.response.data.message !== "Email already exists"
							? false
							: undefined,
					passwordFeedback:
						e?.response.data.message &&
						e.response.data.message !== "Email already exists"
							? "Invalid Credentials"
							: "",
				}
			})
		} else {
			if (
				pathname.indexOf("signin") === -1 &&
				pathname.indexOf("signup") === -1
			)
				navigate("/signin")
		}
	}
	const login = (formData) => {
		if (!loadingLogin) {
			setLoadingLogin(true)
			authApi
				.post(`/api/users/login/`, formData)
				.then(loginHandler)
				.catch(loginCatchHandler)
				.finally(() => {
					setLoadingLogin(false)
				})
		}
	}
	const register = (formData) => {
		if (!loadingLogin) {
			setLoadingLogin(true)
			authApi
				.post(`/api/users/register/`, formData)
				.then(loginHandler)
				.catch(loginCatchHandler)
				.finally(() => {
					setLoadingLogin(false)
				})
		}
	}
	const logout = () => {
		if (!loadingLogin) {
			setShowPreloader(true)
			setLoadingLogin(true)
			authApi
				.get(`/api/users/logout/`)
				.then(() => {
					setUser({})
					setLoggedIn(false)
					cookies.remove("cs")
					navigate("/signin")
				})
				.catch(() => {
					Toast.fire({
						icon: "error",
						title: "Something went wrong.",
					})
				})
				.finally(() => {
					setShowPreloader(false)
					setLoadingLogin(false)
				})
		}
	}

	useEffect(() => {
		if (loggedIn === undefined) {
			authApi
				.get(`/api/users/get/`)
				.then(loginHandler)
				.catch(loginCatchHandler)
				.finally(() => {
					setFirstLogin(true)
				})
		}
		setValidator({})
		// if (!loggedIn && !loadingLogin) setValidator({})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loadingLogin, loggedIn, pathname, user])

	return (
		<AuthContent.Provider
			value={{
				authApi,
				login,
				register,
				logout,
				loggedIn,
				loadingLogin,
				user,
				defaultFormData,
				formData,
				setFormData,
				handleFormData,
				firstLogin,
				setFirstLogin,
				validator,
				setValidator,
				regExEmail,
			}}
		>
			{children}
		</AuthContent.Provider>
	)
}

export default AuthProvider
