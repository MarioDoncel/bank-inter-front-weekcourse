import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Header from '../../components/Header/index'
import {BodyContainer,DashboardBackground,InlineContainer,InlineTitle} from './styles'
import Statement from './Statement'
const Dashboard = () => {

    const wallet = 4550
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
                            <Input style={{flex:1}} placeholder='Valor'/>
                            <Button>Gerar código</Button>
                        </InlineContainer>
                        
                            <p className="primary-color">Pix copia e cola:</p>
                            <p className="primary-color">asd10asd1asd1as4d1asd4</p>
                        
                   </Card>
                   <Card noShadow width="90%">
                        <InlineTitle>
                            <h2 className="h2">Pagar PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                        <Input style={{flex:1}} placeholder='Insira a chave'/>
                        <Button>Pagar PIX</Button>
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