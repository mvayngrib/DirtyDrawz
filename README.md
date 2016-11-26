# DirtyDraw from Shawn

I've finished Four parts, Registration, SideMenu Order and Account.

Actually SideMenu is not a isolated page, all the stuff of it are in the folder "react-native-side-menu". For the rest, Registration is registration.js, Account is account.js, Order is order.js

And there are two more js scripts in the main folder, one is Button.js, for the button, another is RegistrationItem.js, displaying the entry of account information.

1. If you want to run it firstly.
    I implemented these things in one project, which means if you want to test whether any of them work correctly, you should know how to modify the project's property for setting up the "root" page as the one you want to test. Or, if you know how to navigate between pages, that make things easier. (which I don't know...) You could follow the link here: http://blog.tylerbuchea.com/renaming-a-react-native-project/  to change the property.

    For Registration and Account, after you done with this, just ran it like a regular react native project. I didn't use any dependencies so there is no need for you to install anything. 
    For Order, you have to install collapsible components first. Check the link: https://github.com/oblador/react-native-collapsible to see how to it does.
  
2. If you want to integrate them.
  As I describe above, for Registration and Account, there is no need for you to install anything. For Order, you have to install collapsible components first.
  Copy all these files&folders:
	orderAssets
	react-native-side-menu
	Button.js
	RegistrationItem.js
	registration.js
	account.js
	order.js
  to your project and modify the registration.js, account.js and order.js to suit your project, if necessary. That's all.

If any questions, contact me.
