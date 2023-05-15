import { useState } from 'react';
import { AppContainer } from "./App.style";
import { QRCode, Form, Networks } from "./Components";
import { CodeType } from '@renderer/utils/types/types';
import icone from '../../assets/Zen.png';

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
    },
    barcode: {
      value: "http://www.example.com/",
      width: 2,
      height: 100,
      format: "CODE128",
      fontOptions: "",
      font: "monospace",
      fontSize: 20,
      textAlign: "center",
      textPosition: "bottom",
      textMargin: 2,
      displayValue: true,
      margin: 10,
      marginTop: undefined,
      marginRight: undefined,
      marginBottom: undefined,
      marginLeft: undefined
    }
  })

  return (
    <AppContainer>
      <div className='codes'>
        <QRCode code={code}/>
      </div>
      <Form code={code} set={setCode}/>
      <Networks />
    </AppContainer>
  )
}
