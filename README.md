# wp-woo-mpesa-gateway

M-PESA Payment Gateway WordPress plugin for WooCommerce

This plugin enables the customer to have an option of paying for goods using M-PESA mobile money service from a WordPress site that has WooCommerce plugin installed.

The plugin adds an option on the checkout section for paying through M-PESA (A mobile payment platform).

In order to use the plugin, one must get an M-PESA PayBill or Till number, which is a unique number that will act as an account where the payments from the customer will be channeled.

After this, one must create an account on the Safaricom’s Daraja Portal and link this Paybill or Till number to the account created on the portal.

The portal will enable you to get the following:

- Passkey
- Consumer Key
- Consumer Secret
- Enpoints for Sandbox/Production for authentication and payment request.

These details should be filled after activating the plugin and will be stored in your website.

The above setup is to ensure that it is the site owner who has full control over the payment details of the Paybill or Till number.

When the customer clicks on the Pay button on the payment page, the plugin will initiate a payment authentication request to the customer.

The customer will then accept or decline the payment from the personal mobile phone and the callback will be sent from the portal with details of the customer’s action.

This is what is then used to determine if to change the status of the order or not.

## Plugin features:

- Compatible with Wordpress themes
- Easy to use
- Lightweight
- Supports all modern browsers

## How to use:

1. Make sure you have installed and activated WooCommerce plugin before installing and activating this plugin.
2. Upload Woocommerce M-PESA Payment Gateway plugin files to the wordpress plugins directory (/wp-content/plugins/), or install the plugin from the Wordpress admin plugin screen.
3. Activate the plugin.
4. On the Wordpress admin, navigate to WooCommerce > Settings > M-PESA > Manage and fill in the fields provided in order for the plugin to work.

## Disclaimer

- This plugin does not have any relation with WooCommerce or M-PESA.
- The plugin’s purpose is just to help in linking the WooCommerce plugin with the M-PESA payment method.
- THE PLUGIN SHOULD AT NO POINT BE HELD RESPONSIBLE IF THE DARAJA ENDPOINT IS UNREACHABLE OR UNABLE TO SERVE REQUESTS.
- In the plugin description there are links to other websites which are not under the control of WooCommerce M-PESA Payment Gateway Plugin. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.

## Installation

1. Unzip files
2. Upload the folder into your plugins directory
3. Activate the plugin
4. Update WooCommerce settings

## FAQ

How does the customer authenticate the payment?

- The customer receives a Sim Application Toolkit push to authenticate the payment and this is secure since it is the customer doing this.

## Changelog

- 1.0
  - Process callbacks for PayBill & Till payments.
