import express from "express"

const app = express()

app.get("/", (_, res: express.Response) => {
	res.status(200).json({ success: true })
})

export default app
