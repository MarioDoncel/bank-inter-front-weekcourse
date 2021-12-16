import {StatementItemContainer, StatementItemImage, StatementItemInfo, StatementContainer} from './style';
import {FiDollarSign} from 'react-icons/fi'
import {format} from 'date-fns';

import { useEffect, useState } from 'react';
import { transactions} from '../../../services/resources/pix'

interface IStatementItem {
    user: {
        firstName: string,
        lastName: string
    },
    value: number,
    type: 'paid' | 'received',
    updatedAt: Date
}

const StatementItem = ({user, value, type, updatedAt}: IStatementItem) => {

    return (
        <StatementItemContainer>
            <StatementItemImage type={type}>
                <FiDollarSign size={24}/>
            </StatementItemImage>
            <StatementItemInfo>
                <p className="primary-color">
                    {value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                </p>
                <p className="">{type === 'paid' ? `Pago a `: `Recebido de`} <strong>{user.firstName} {user.lastName}</strong></p>
                <p className="">{format(new Date(updatedAt), "dd/MM/yyyy 'às' HH:mm'h'")}</p>
            </StatementItemInfo>
        </StatementItemContainer>
    )
}

const Statement = () => {

    const [transactionData, setTransactionData] = useState<IStatementItem[]>([])

    const getAllTransactions = async () => {
        const {data} = await transactions()
        setTransactionData(data.transactions)
    }

    useEffect(()=>{
        getAllTransactions()
    }, [])

    return (
        <StatementContainer>
            {transactionData.length > 0 && transactionData?.map(statement => <StatementItem {...statement}/>)}
        </StatementContainer>
    )
}

export default Statement;