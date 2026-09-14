import { AppBackground } from "@/src/components/generic/AppBackground";
import { AuthRegisterForm } from "@/src/components/auth/AuthRegisterForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function RegisterPreviewScreen() {
  return (
    <AppBackground
      colors={[
        "#2D0B1E",
        "#57122C",
        "#4A1027",
        "#004D3C",
        "#0A3845",
        "#081321",
      ]}
    >
      <KeyboardAwareScrollView
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
        extraScrollHeight={40}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <AuthRegisterForm />
      </KeyboardAwareScrollView>
    </AppBackground>
  );
}
