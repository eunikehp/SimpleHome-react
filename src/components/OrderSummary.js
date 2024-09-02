import { useSelector } from "react-redux";
import { useState } from "react";
import {
  Col,
  Row,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { selectAllCart } from "../features/cart/CartSlice";

const OrderSummary = () => {
  const cart = useSelector(selectAllCart);

  //modal
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const getTotal = () => {
    let totalQuantity = 0;
    let subTotal = 0;
    let totalAmount = 0;
    let postageCost = 12;

    cart.forEach((item) => {
      totalQuantity += item.quantity;
      subTotal += item.price * item.quantity;
      totalAmount = subTotal + postageCost;
    });
    return { subTotal, totalQuantity, postageCost, totalAmount };
  };

  return (
    <div className="summary-box">
      <h4 className="title">Order Summary</h4>
      <table width="100%">
        <tr>
          <td>
            Total ({getTotal().totalQuantity}{" "}
            {getTotal().totalQuantity > 1 ? "items" : "item"})
          </td>
        </tr>
        <tr>
          <td>Subtotal </td>
          <td>€ {getTotal().subTotal}</td>
        </tr>
        <tr>
          <td>Postage cost</td>
          <td>€ {getTotal().postageCost}</td>
        </tr>
        <tr>
          <td>
            <hr />
          </td>
          <td>
            <hr />
          </td>
        </tr>
        <tr>
          <td>Total amount</td>
          <td>€ {getTotal().totalAmount}</td>
        </tr>
      </table>
      <div className="checkout-button" onClick={toggle}>
        Check Out
      </div>

      <Modal isOpen={modal} toggle={toggle} className="check-out">
        <ModalHeader toggle={toggle}><h4 className="title">Your Order</h4></ModalHeader>
        <ModalBody>
          <table width="100%">
            <tr>
              <td><p>
                Total ({getTotal().totalQuantity}{" "}
                {getTotal().totalQuantity > 1 ? "items" : "item"})</p>
              </td>
            </tr>
            <tr>
              <td><p>Subtotal</p></td>
              <td><p>€ {getTotal().subTotal}</p></td>
            </tr>
            <tr>
              <td><p>Postage cost</p></td>
              <td><p>€ {getTotal().postageCost}</p></td>
            </tr>
            <tr>
              <td>
                <hr />
              </td>
              <td>
                <hr />
              </td>
            </tr>
            <tr>
              <td><p>Total amount</p></td>
              <td><p>€ {getTotal().totalAmount}</p></td>
            </tr>
          </table>
        </ModalBody>

        <ModalFooter>
          <Button className="modal-button" onClick={toggle}>
            <p>Pay Now</p>
          </Button>
          <Button className="modal-button" onClick={toggle}>
            <p>Cancel</p>
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default OrderSummary;
