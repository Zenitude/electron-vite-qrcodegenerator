import { useState, useEffect } from 'react';
import { FormContainer, Container } from "./Form.style";
import { PropsForm } from "@renderer/utils/types/types";
import { formatLink } from '@renderer/utils/functions/formatLink';
import { switchDisplay } from '@renderer/utils/functions/switchDisplay';
import { FaChevronCircleUp } from 'react-icons/fa';

export default function Form({code, set}: PropsForm): JSX.Element {
  const [ qrcode, setQrCode ] = useState(code.qrcode);
  const [ imageSettings, setImageSettings ] = useState(code.qrcode.imageSettings);
  const [ toggleInput, setToggleInput ] = useState([
    { class: 'link', toggle: false },
    { class: 'fgColor', toggle: false },
    { class: 'bgColor', toggle: false },
    { class: 'level', toggle: false },
    { class: 'src', toggle: false },
    { class: 'fontOptions', toggle: false }
  ]);
  
  useEffect(() => {
    const labelLevel = document.querySelector('label[for="level"]');
    const selectLevel = document.querySelector('select[id="level"]');
    const title = `Plus le niveau de correction est élevé, plus le code QR peut résister à des perturbations telles que des rayures, des distorsions ou des pertes de données.
Cependant, une correction d'erreur plus élevée signifie également que le code QR est plus dense et nécessite plus de pixels pour être généré, ce qui peut affecter sa lisibilité à distance.`
    labelLevel?.setAttribute('title', title);
    selectLevel?.setAttribute('title', title);
  });

  useEffect(() => {
    setQrCode({...qrcode, imageSettings: imageSettings});
  }, [imageSettings])

  useEffect(() => {
    set({...code, qrcode: qrcode});
  }, [qrcode]);

  return (
    <FormContainer>

        <Container className="link">
          {
            !toggleInput[0].toggle
            ? (<label htmlFor='link'>Lien</label>)
            : (<input type="text" name="link" id="link" 
              value={code.qrcode.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setQrCode({...qrcode, value: e.target.value, imageSettings: imageSettings});
                formatLink(e, imageSettings, setImageSettings);
              }} 
            />)
          }
          <button type="button" onClick={(e) => switchDisplay(e, toggleInput, setToggleInput)}><FaChevronCircleUp /></button>
        </Container>

        <Container className='fgColor'>
          {
            !toggleInput[1].toggle
            ? (<label htmlFor="fgColor">Couleur principale</label>)
            : (<input type="color" name="fgColor" id="fgColor" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => set({...code, foregroundColor: e.target.value})} 
              value={code.foregroundColor}
            />)
          }
          <button type="button" onClick={(e) => switchDisplay(e, toggleInput, setToggleInput)}><FaChevronCircleUp /></button>
        </Container>

        <Container className='bgColor'>
          <button type="button" onClick={(e) => switchDisplay(e, toggleInput, setToggleInput)}><FaChevronCircleUp /></button>
          {
            !toggleInput[2].toggle
            ? (<label htmlFor="bgColor">Couleur secondaire</label>)
            : (<input type="color" name="bgColor" id="bgColor" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => set({...code, backgroundColor: e.target.value})} 
              value={code.backgroundColor}
            />)
          }
        </Container>

        <Container className='level'>
          <button type="button" onClick={(e) => switchDisplay(e, toggleInput, setToggleInput)}><FaChevronCircleUp /></button>
          {
            !toggleInput[3].toggle
            ? (<label htmlFor="level">Correctif QrCode</label>)
            : (<select name="level" id="level" defaultValue={code.qrcode.level} 
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setQrCode({...qrcode, level: e.target.value})}
            >
              <option value="M">Moyen</option>
              <option value="H">Élevé</option>
            </select>)
          }
          
        </Container>

        {/* <Container className='src'>
          <button type="button" onClick={(e) => switchDisplay(e, toggleInput, setToggleInput)}><FaChevronCircleUp /></button>
          {
            !toggleInput[4].toggle
            ? (<label htmlFor="src">Icône QrCode</label>)
            : (<input type="url" name="src" id="src" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageSettings({...imageSettings, src: e.target.value})} 
              value={code.qrcode.imageSettings.src.includes('src/') ? '' : code.qrcode.imageSettings.src}
            />)
          }
        </Container> */}

    </FormContainer>
  )
}
