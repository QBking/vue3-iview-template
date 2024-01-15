import Request from "@/request"

// const { BASE_URL, TIME_OUT } = process.env
// const userRequest = new Request(BASE_URL, TIME_OUT)

export const userApi = {
  getUserById: () => Request.get({
    url: `/excel/test`
  })
};