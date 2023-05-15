import { NetworksContainer, NetworkLink, NetworkImage } from "./Networks.style";
import { networks } from '../../utils/datas/networks';

export default function Networks() {
  return (
    <NetworksContainer>
      {
        networks.map((network, index) => (
          <NetworkLink key={`${index}-${network.name}`} to={network.link}>
            <NetworkImage src={network.icon} alt={network.name}/>
          </NetworkLink>
        ))
      }
    </NetworksContainer>
  )
}
