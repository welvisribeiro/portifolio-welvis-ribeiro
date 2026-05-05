import { ScrollView, Text, View, TextInput } from "react-native";
import { useState } from "react";

import { ScreenContainer } from "@/components/screen-container";
import { AccessibleButton } from "@/components/accessible-button";
import { useJitsiMeet } from "@/hooks/use-jitsi-meet";

/**
 * ConectaFácil - Home Screen
 *
 * Interface simplificada e acessível para idosos.
 * Tela única com campo para nome e botão grande para entrar na chamada.
 *
 * Princípios de Design:
 * - Alto contraste (branco/cinza escuro)
 * - Tipografia grande e legível
 * - Botão primário com altura mínima de 64px
 * - Feedback visual e tátil ao interagir
 * - Sem elementos complexos ou desnecessários
 */
export default function HomeScreen() {
  const [userName, setUserName] = useState("");

  // Validar se o nome não está vazio
  const isNameValid = userName.trim().length > 0;

  const { joinCall } = useJitsiMeet();
  const [isLoading, setIsLoading] = useState(false);

  // Função para entrar na chamada
  const handleJoinCall = async () => {
    if (!isNameValid || isLoading) return;

    try {
      setIsLoading(true);
      // Integração com Jitsi Meet
      await joinCall({
        userName: userName.trim(),
        roomName: "familia-conecta",
      });
    } catch (error) {
      console.error("Erro ao entrar na chamada:", error);
      alert("Erro ao conectar à chamada. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScreenContainer className="bg-white" containerClassName="bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 justify-center items-center px-6 gap-8">
          {/* Cabeçalho */}
          <View className="items-center gap-2">
            <Text className="text-5xl font-bold text-gray-900">
              ConectaFácil
            </Text>
            <Text className="text-xl text-gray-600 text-center">
              Videoconferência para a Família
            </Text>
          </View>

          {/* Campo de Entrada de Nome */}
          <View className="w-full gap-3">
            <Text className="text-2xl font-semibold text-gray-900">
              Seu Nome
            </Text>
            <TextInput
              placeholder="Digite seu nome..."
              placeholderTextColor="#999999"
              value={userName}
              onChangeText={setUserName}
              maxLength={50}
              editable={true}
              style={{
                fontSize: 18,
                padding: 16,
                borderWidth: 2,
                borderColor: userName.length > 0 ? "#0066CC" : "#E0E0E0",
                borderRadius: 12,
                color: "#1A1A1A",
                backgroundColor: "#FFFFFF",
              }}
            />
          </View>

          {/* Botão Principal - Entrar na Chamada */}
          <AccessibleButton
            label="Entrar na Chamada"
            onPress={handleJoinCall}
            disabled={!isNameValid}
            loading={isLoading}
            fontSize={24}
            minHeight={64}
          />

          {/* Texto de Instruções */}
          <View className="items-center gap-2">
            <Text className="text-base text-gray-600 text-center">
              Você entrará na sala "familia-conecta"
            </Text>
            <Text className="text-sm text-gray-500 text-center">
              Vídeo e áudio serão ativados automaticamente
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
