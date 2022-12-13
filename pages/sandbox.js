
import {Whatsapp,WhatsappContainer, Superchat, HugeQuote} from '../components/CustomUI'

export default function Home() {
  return (
    <div>
        <WhatsappContainer>
          <Whatsapp time="14:03 PM" messages={["Hi","hey"]}/>
          <Whatsapp me={true} time="14:04 PM" messages={["sup"]}/>
        </WhatsappContainer>
    </div>
  )
}