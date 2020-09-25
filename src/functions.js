import { db } from './config';
import dayjs from 'dayjs';

let timestamp = dayjs().format('DD-MM-YYYY HH:mm:ss')

export const sendInteraction = (Id, type) => {
    db.ref(`/${Id}/interactions`).push(
        {
            type,
            timestamp,
        }
    )
}

export const sendJustification = ({ Id, justification }) => {
    db.ref(`/${Id}/justifications`).push(
        {
            justification,
            timestamp
        }
    )
}