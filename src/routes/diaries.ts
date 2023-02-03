import e from 'express'
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
    try{
        const newDiaryEntry = toNewDiaryEntry(req.body)
        const addDiaryEntry = diaryServices.addDiary(newDiaryEntry)
        res.json(addDiaryEntry)
    } catch (e: any) {
        res.status(400).send(e.message)
    }
})

export default router
