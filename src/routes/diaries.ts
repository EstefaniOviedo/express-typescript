import express from 'express'
import * as diaryServices from '../services/diaryServices'
const router = express.Router()

router.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithInputSensitiveInfo())
})

router.get('/:id', (req, res) => {
    const diary = diaryServices.findById(+req.params.id)
    res.send(diary ?? 404)
})

router.post('/', (_req, res) => {
    res.send('Saving a diary')
})

export default router