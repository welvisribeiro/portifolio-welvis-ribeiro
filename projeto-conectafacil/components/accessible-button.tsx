import { Pressable, Text, type PressableProps, Platform } from "react-native";
import * as Haptics from "expo-haptics";

/**
 * AccessibleButton - Botão otimizado para acessibilidade
 *
 * Características:
 * - Tamanho mínimo de 48x48dp (recomendação WCAG)
 * - Feedback visual e tátil
 * - Alto contraste
 * - Sem animações excessivas
 * - Suporte a acessibilidade nativa
 */

interface AccessibleButtonProps extends PressableProps {
  label: string;
  onPress: () => void | Promise<void>;
  disabled?: boolean;
  loading?: boolean;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: number;
  minHeight?: number;
  useHaptics?: boolean;
}

export function AccessibleButton({
  label,
  onPress,
  disabled = false,
  loading = false,
  backgroundColor = "#0066CC",
  textColor = "#FFFFFF",
  fontSize = 24,
  minHeight = 64,
  useHaptics = true,
  ...props
}: AccessibleButtonProps) {
  const isDisabled = disabled || loading;

  const handlePress = async () => {
    if (isDisabled) return;

    // Haptic feedback
    if (useHaptics && Platform.OS !== "web") {
      try {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      } catch (e) {
        // Silenciosamente ignorar erro
      }
    }

    try {
      await onPress();
    } catch (error) {
      console.error("Erro ao pressionar botão:", error);
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={isDisabled}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={loading ? "Carregando" : undefined}
      accessibilityState={{
        disabled: isDisabled,
        busy: loading,
      }}
      style={({ pressed }) => ({
        width: "100%",
        maxWidth: 320,
        minHeight,
        backgroundColor: isDisabled
          ? "#CCCCCC"
          : pressed
            ? "#0052A3"
            : backgroundColor,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        opacity: isDisabled ? 0.6 : 1,
      })}
      {...props}
    >
      <Text
        style={{
          fontSize,
          fontWeight: "bold",
          color: textColor,
          textAlign: "center",
        }}
      >
        {loading ? "Conectando..." : label}
      </Text>
    </Pressable>
  );
}
