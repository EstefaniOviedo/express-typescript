import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithInputSensitiveInfo())
})

router.get('/:id', (req, res) => {
    const diary = diaryServices.findById(+req.params.id) //For parser a num +
    return (diary != null)
    ? res.send(diary)
    : res.sendStatus(400)
})

router.post('/', (req, res) => {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    try{
        const addDiaryEntry = diaryServices.addDiary(newDiaryEntry)
        res.json(addDiaryEntry)
    } catch (err) {
        res.status(400).send(err)
    }
})

export default router
