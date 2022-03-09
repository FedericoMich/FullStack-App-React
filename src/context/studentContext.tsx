
import { TypeStudent } from "../types/typesComponent"
import {Student} from "../api/mockStudent"
import React from "react";


export const StudentContext = React.createContext<TypeStudent>(Student());