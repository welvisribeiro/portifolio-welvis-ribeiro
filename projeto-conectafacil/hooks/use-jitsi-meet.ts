import { useCallback } from "react";
import { Platform, Linking } from "react-native";
import * as WebBrowser from "expo-web-browser";

/**
 * Hook para gerenciar a integração com Jitsi Meet
 *
 * Uso:
 * const { joinCall } = useJitsiMeet();
 * joinCall({ userName: "João", roomName: "familia-conecta" });
 *
 * Nota: Para Android/iOS com react-native-jitsi-meet, será necessário
 * configurar as dependências nativas. Por enquanto, usamos WebBrowser
 * como fallback que funciona em todos os casos.
 */
export function useJitsiMeet() {
  const joinCall = useCallback(
    async (options: { userName: string; roomName: string }) => {
      try {
        const { userName, roomName } = options;

        if (!userName || !roomName) {
          console.error(
            "userName e roomName são obrigatórios para entrar na chamada"
          );
          return;
        }

        // Construir URL do Jitsi Meet com parâmetros
        // Documentação: https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-web-sdk/
        const jitsiUrl = `https://meet.jit.si/${encodeURIComponent(roomName)}?userInfo.displayName=${encodeURIComponent(userName)}&config.startAudioMuted=false&config.startVideoMuted=false`;

        if (Platform.OS === "web") {
          // Para web, abrir em nova aba
          window.open(jitsiUrl, "_blank");
        } else {
          // Para Android/iOS, usar WebBrowser (abre em app nativo)
          await WebBrowser.openBrowserAsync(jitsiUrl);
        }

        console.log(
          `Entrando na chamada: ${userName} em ${roomName}`
        );
      } catch (error) {
        console.error("Erro ao entrar na chamada Jitsi:", error);
        throw error;
      }
    },
    []
  );

  return { joinCall };
}
