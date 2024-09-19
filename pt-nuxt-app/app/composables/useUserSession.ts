import { randomUUID } from "uncrypto"

const useUserSessionId = () => useState("pt-user-session-id", () => "")
const useUserSessionState = () => useState("pt-user-session-state", () => false)

const getUserSessionId = () => {
	return localStorage.getItem("pt-user-session-id") || randomUUID()
}

export const useUserSession = () => {
	const userSessionId = useUserSessionId()
	const userSessionState = useUserSessionState()
	if (!userSessionState.value && import.meta.client) {
		userSessionId.value = getUserSessionId()
		userSessionState.value = !!userSessionId.value
	}

	return {
		userSessionState,
		userSessionId,
	}
}
