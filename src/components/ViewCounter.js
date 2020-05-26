import { useState, useEffect } from "react"
import format from "comma-number"

import loadDb from "../firebase/db"

const ViewCounter = ({ id }) => {
  const [views, setViews] = useState("")

  useEffect(() => {
    try {
      const onViews = newViews => setViews(newViews.val())
      let db

      const fetchData = async () => {
        db = await loadDb()
        db.child(id).on("value", onViews)
      }

      fetchData()

      return () => {
        if (db) {
          db.child(id).off("value", onViews)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }, [id])

  useEffect(() => {
    try {
      const registerView = () =>
        fetch(
          `https://us-central1-thomas-wang.cloudfunctions.net/views?id=${id.replace(
            /\\|\//g,
            ""
          )}`
        )

      registerView()
    } catch (error) {
      console.log(error)
    }
  }, [id])

  return `${views ? format(views) : "–––"} views`
}

export default ViewCounter
