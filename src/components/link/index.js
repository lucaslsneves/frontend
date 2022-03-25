
import { Link as LinkRouter } from 'react-router-dom';

import './styles.css'

export default function Link({children, to}) {
  return <LinkRouter  to={to}>{children}</LinkRouter>
}