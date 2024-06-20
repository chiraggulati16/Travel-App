import { Text, TouchableOpacity } from "react-native"
import { Labels } from "../../utils/constant"
import { styles } from "./styles";

interface CustomButtonProps {
    buttonStyle: any
}
const CustomButton = ({buttonStyle}: CustomButtonProps) => {
    return(
        <TouchableOpacity style={[styles.buttonContainer, buttonStyle]}>
            <Text style={styles.text}>{Labels.BOOK_NOW}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;