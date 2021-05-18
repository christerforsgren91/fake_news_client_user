import axios from 'axios';
import store from '../state/store/configureStore';

const Authentication = {
  async subscribe(event) {
    // try {
    //   let params;
    //   // Create user
    //   let data;
    //   await axios.post('/auth', params).then((headers) => {
    //     const stripeResponse = await stripe.createToken();
    //     stripeResponse.token &&
    //       (await axios.post(
    //         '/subscriptions/',
    //         { stripeToken: stripeResponse.token.id },
    //         { headers: headers }
    //       ).then((repsonse) => {
    //         // subscription success??
    //       }));
    //   });
    // } catch (error) {}
  },
};

export default Authentication;
