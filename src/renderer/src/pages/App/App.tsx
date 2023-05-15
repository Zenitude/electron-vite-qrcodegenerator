import { useState } from 'react';
import { AppContainer } from "./App.style";
import { QRCode, Form, Networks } from "./Components";
import { CodeType } from '@renderer/utils/types/types';
import icone from '../../assets/Zen.png';
import { networks } from '../../utils/datas/networks';
import { supports } from '../../utils/datas/supports';

export default function App(): JSX.Element {
  const [ code, setCode ] = useState<CodeType>({
    backgroundColor: "#ffffff",
    foregroundColor: "#000000",
    qrcode: {
      value: "http://www.example.com/",
      includeMargin: true,
      size: 250,
      level: "M",
      imageSettings: {
        src: icone,
        x: undefined,
        y: undefined,
        height: 50,
        width: 50,
        excavate: true
      }
    }
  })

  return (
    <AppContainer>
      <div className='codes'>
        <QRCode code={code}/>
      </div>
      <Form code={code} set={setCode}/>
      <Networks networks={networks}/>
      <Networks networks={supports}/>
    </AppContainer>
  )
}
