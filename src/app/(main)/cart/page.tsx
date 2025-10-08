import ShippingCart from "@/_components/Main/UI/ShippingCart/ShippingCart";
import { Container} from "@mui/material";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Cart - TrustyShop BD',
  description: '...',
}
const CartPage = () => {
    
  return (
    <Container>
      <ShippingCart/>
    </Container>
  );
};

export default CartPage;
