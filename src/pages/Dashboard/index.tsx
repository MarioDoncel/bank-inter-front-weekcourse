import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Header from '../../components/Header/index'
import {BodyContainer,DashboardBackground,InlineContainer,InlineTitle} from './styles'
import Statement from './Statement'
import UseAuth from '../../hooks/useAuth'
import { Fragment, useEffect, useState } from 'react'

import {pay,request} from '../../services/resources/pix'



const Dashboard = () => {
    const {user, getCurrentUser} = UseAuth()
    const wallet = user.wallet

    const [key, setKey] = useState('')
    const [generatedKey, setGeneratedKey] = useState('')
    const [newValue, setNewValue] = useState('')

    const handleNewPayment = async () => {
        const {data} = await request(Number(newValue))
        if (data.copyPasteKey) setGeneratedKey(data.copyPasteKey)
    }

    const handlePayPix = async () => {
        try {
            const {data} =await pay(key)
            if(data.msg) {
                alert(data.msg)
                return
            }
            alert('Não foi possivel fazer o pagamento.')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        getCurrentUser()
    },[])

    if(!user) return null 


    const formatToBRL = (value: number):string => value
                                                    .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    return (
        <DashboardBackground>
            <Header />
            <BodyContainer>
                <div>
                    <Card noShadow width='90%'>
                        <InlineTitle>
                            <h2 className='h2'> Saldo Atual</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <h3 className='wallet'>{formatToBRL(wallet)}</h3>
                        </InlineContainer>
                    </Card>
                    <Card noShadow width="90%">
                       <InlineTitle>
                        <h2 className="h2">Receber PIX</h2>
                       </InlineTitle>
                        <InlineContainer>
                            <Input style={{flex:1}} value={newValue} onChange={e => setNewValue(e.target.value)} placeholder='Valor'/>
                            <Button onClick={handleNewPayment}>Gerar código</Button>
                        </InlineContainer>
                        {generatedKey && (
                            <Fragment>
                                <p className="primary-color">Pix copia e cola:</p>
                                <p className="primary-color">{generatedKey}</p>
                            </Fragment>
                            
                        )}
                        
                   </Card>
                   <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2">Pagar PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                        <Input style={{flex:1}} value={key} onChange={e => setKey(e.target.value)} placeholder='Insira a chave'/>
                        <Button onClick={handlePayPix}>Pagar PIX</Button>
                        </InlineContainer>
                   </Card>
                </div>
                <div>
                    <Card noShadow width="90%">
                      <InlineTitle>
                      <h2 className="h2">Extrato da conta</h2>
                      </InlineTitle>
                     <Statement />
                   </Card>
                </div>
            </BodyContainer>
        </DashboardBackground>
    )
}

export default Dashboard