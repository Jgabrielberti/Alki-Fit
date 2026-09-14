import { View, Pressable, Text, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/src/constants/theme";
import { PopupMenu } from "@/src/components/generic/PopupMenu";

type Props = {
  name: string;
  description: string | null;
  isExpanded: boolean;
  isMenuOpen: boolean;
  onToggleExpand: () => void;
  onToggleMenu: () => void;
  onAddTemplate: () => void;
  onEdit: () => void;
  onDelete: () => void;
  children: React.ReactNode;
};

export function WorkoutFolderCard({
  name,
  description,
  isExpanded,
  isMenuOpen,
  onToggleExpand,
  onToggleMenu,
  onAddTemplate,
  onEdit,
  onDelete,
  children,
}: Props) {
  const menuTriggerRef = useRef<View>(null);

  return (
    <BlurView intensity={100} tint="systemMaterialDark" style={styles.folderCard}>
      <Pressable style={styles.folderHeader} onPress={onToggleExpand}>
        <Ionicons
          name={isExpanded ? "chevron-down" : "chevron-forward"}
          size={20}
          color={Colors.text.secondary}
        />

        <View style={styles.folderTitleContainer}>
          <Text style={styles.folderName}>
            {name}
          </Text>
          {description && (
            <Text style={styles.folderDescription}>
              {description}
            </Text>
          )}
        </View>

        <View style={styles.folderActions}>
          <Pressable
            ref={menuTriggerRef}
            hitSlop={{ top: 15, bottom: 15, left: 10, right: 10 }}
            style={styles.optionsButton}
            onPress={(e) => {
              e.stopPropagation();
              onToggleMenu();
            }}
          >
            <Ionicons
              name="ellipsis-vertical"
              size={20}
              color={Colors.text.secondary}
            />
          </Pressable>

          <PopupMenu
            visible={isMenuOpen}
            onClose={onToggleMenu}
            anchorRef={menuTriggerRef}
            items={[
              { label: "Editar", icon: "pencil-outline", onPress: onEdit },
              {
                label: "Deletar",
                icon: "trash-outline",
                danger: true,
                onPress: onDelete,
              },
            ]}
          />

          <Pressable
            hitSlop={{ top: 15, bottom: 15, left: 10, right: 10 }}
            onPress={(e) => {
              e.stopPropagation();
              onAddTemplate();
            }}
          >
            <Ionicons
              name="add-circle-outline"
              size={26}
              color={Colors.training.secondary}
            />
          </Pressable>
        </View>
      </Pressable>

      {isExpanded && <View style={styles.folderBody}>{children}</View>}
    </BlurView>
  );
}

const styles = StyleSheet.create({
  folderCard: {
    flex: 1,
    
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: 16,
    
    marginVertical: 8,

    overflow: "hidden",
  },
  folderHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 16,
  },
  folderTitleContainer: {
    flex: 1,
  },
  folderName: {
    fontSize: 17,
    fontWeight: "600",
    color: Colors.text.primary,
  },
  folderDescription: {
    width: "100%",
    fontSize: 13,
    color: Colors.text.muted,
    marginTop: 2,
  },
  folderActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    position: "relative",
  },
  optionsButton: {
    padding: 4,
  },
  folderBody: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    gap: 12,
  },
});
