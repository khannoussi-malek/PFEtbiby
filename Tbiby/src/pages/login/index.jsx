import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonButton,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonImg,
} from "@ionic/react";
import "./index.css";
const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="main">
        <IonImg src="assets/icon/logo192.png" className="img" />
        <h1 className="center">Login</h1>
        <div className="container">
          <IonCard className="card">
            <IonCardContent>
              <IonItem>
                <IonLabel position="floating">Floating Label</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Floating Label</IonLabel>
                <IonInput type="password"></IonInput>
              </IonItem>
              <IonButton>submit</IonButton>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
