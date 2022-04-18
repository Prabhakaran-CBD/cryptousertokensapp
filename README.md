# cryptousertokensapp
This Application is about to list out ERC20 fungible tokens and ERC721 a non-fungible tokens (NFT) for the user with their account address. To achive this in this app we have an option to see users their respective holding tokens list from their wallet by connecting with wallet account in Metamask or by searching with their account address from the search bar.

* To get this used ethplorer API call and Opensea Marketplace API endpoints respectively.
  Note:Ethplorer provides free-apikey to fetch ERC20 tokens from mainnet but it has some limitations for the number of tries.
  Similarly OpenSea has some limitation on its endpoint for using free api key.

# Run and Test:
This application is hosted in netlify, so by clicking the following link it will take to the application https://cryptousertokensapp.netlify.app/
The screen will be look like below 

![image](https://user-images.githubusercontent.com/77061534/163755203-2fb03142-08de-4703-9963-984d6bdf620f.png)

* We can select cryptocurrencies or NFT menu from the right menu panel to see the respective list of user's crypto tokens in page.
*	If wallet is not connected yet then need to connect with wallet by clicking the ‘connect wallet’ button, this connection will take you the Metamask wallet section  and prompt to enter login credential. Once connected successfully then app will dispaly the user holding tokens/assets based on their Metamask wallet
*	If wallet is already connected then app will say the wallet is connected already.
*	Before connecting with wallet if you try to see the menu item then app will prompt to say ‘connect with the wallet’.
*	Also by selecting each menu items we can see user's respective holding tokens from their wallet and some toke details information under that.
*	If user doesn't hold any tokens in their wallet then app will display message saying 'No Tokens found for the connected user wallet'.
	
*	NFT tokens will display token details as show below, like symbol, discription, creation date, closing date etc… also when you click on that token it will take you the corresponding ‘openSea website link’ so user can view further detail information about that nft token. All this NFT tokens are listed corresponding to the user connected wallet account. We can cross check and confirm the output by seeing their wallet details from etherscan.

![image](https://user-images.githubusercontent.com/77061534/163757482-76d4160b-4e0e-46fd-bf65-b263cef15381.png)

* Regarding the Cryptocurrencies page, this will display the ERC20 tokens list as like below and this section show some token details as well, we can see all the list of token that user holdings from there metamask connected wallet, as like NFTs we can cross check the balance and other deails from etherscan.

![image](https://user-images.githubusercontent.com/77061534/163757174-81f5e323-c18b-42e1-b001-b0fa6635f1bd.png)

 
 # To run locally
 To run this application locally just clone the repo into your local system and make sure to install the required dependencies based on the package.json file and then get into the project folder and do run command ‘npm start’ to view the application in your 'localhost', before that need to make sure npm package is installed already , if not need to install the node package from https://nodejs.org/en/download/


