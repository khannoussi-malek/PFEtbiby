import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import Accountmanagement from "./../../gestion de compte/";
import { PrivateRoute } from "./../../../router/_partials/PrivateRoute";
import ListPatients from "./../../Mes patients";
import CalendarDashboard from "./../../calendar";
import { TbibyContext } from "./../../../router/context";
import MonMedecin from "./../../Mon medecin";
import Consultation from "../../consultation";
import CertificatPage from "../../Certificat";
import MonRendezvous from "./../../Mon rendez vous";
import TrouverUnMedecin from "../../Trouver un médecin";
import ListeDact from "../../ListeDact";
import ListeMedicament from "./../../Liste Medicament";
import TableauDynamique from "./../../../components/historique patient/_patials/TableauDynamique";
const ActivityArea = () => {
  const { user } = useContext(TbibyContext);

  return (
    <React.Fragment>
      <Box
        flex="1"
        borderWidth="2px"
        rounded="xl"
        // overflowX="scroll"
        px={{ base: 0, md: 1 }}
        py={{ base: 2, md: 1 }}
      >
        <PrivateRoute
          path="/dashboard"
          component={CalendarDashboard}
          isAuth={true}
          exact
        />

        <PrivateRoute
          path="/dashboard/Consultation"
          component={Consultation}
          isAuth={user.fonctionnalite == "medecin"}
          exact
        />
        <PrivateRoute
          path="/dashboard/Modèle de certificat"
          component={CertificatPage}
          isAuth={
            user.fonctionnalite == "medecin" ||
            user.fonctionnalite == "secretaire"
          }
          exact
        />
        <PrivateRoute
          path="/dashboard/Liste d'actes"
          component={ListeDact}
          isAuth={
            user.fonctionnalite == "medecin" ||
            user.fonctionnalite == "secretaire"
          }
          exact
        />
        <PrivateRoute
          path="/dashboard/Gestion de compte"
          component={Accountmanagement}
          isAuth={true}
          exact
        />
        <PrivateRoute
          path="/dashboard/Mes rendez vous"
          component={MonRendezvous}
          isAuth={
            user.fonctionnalite == "patient" ||
            user.fonctionnalite == "secretaire"
          }
          exact
        />
        <PrivateRoute
          path="/dashboard/Mon historiques"
          component={TableauDynamique}
          isAuth={user.fonctionnalite == "patient"}
          exact
        />
        <PrivateRoute
          path="/dashboard/Mes patients"
          component={ListPatients}
          isAuth={user.fonctionnalite == "medecin"}
          exact
        />
        <PrivateRoute
          path="/dashboard/Mes médecins"
          component={MonMedecin}
          isAuth={
            user.fonctionnalite == "patient" ||
            user.fonctionnalite == "secretaire"
          }
          exact
        />
        <PrivateRoute
          path="/dashboard/Trouver un médecin"
          component={TrouverUnMedecin}
          isAuth={true}
          exact
        />
        <PrivateRoute
          path="/dashboard/Liste medicament"
          component={ListeMedicament}
          isAuth={
            user.fonctionnalite == "medecin" ||
            user.fonctionnalite == "secretaire"
          }
          exact
        />
      </Box>
    </React.Fragment>
  );
};

export default ActivityArea;
