import app from 'firebase/app';
import firebaseConfig from './config';
import 'firebase/auth';

class Firebase{
    constructor(){
        if(!app.apps.length){
            app.initializeApp(firebaseConfig);
        }
        this.auth=app.auth();
    }
    //registra un usuario
    async registrar(username, email, password){
        const nuevoUsuario= await this.auth.createUserWithEmailAndPassword(email, password);

        return await nuevoUsuario.user.updateProfile({
            displayName:username
        })
    }
}

const firebase=new Firebase();

export default firebase;