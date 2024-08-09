import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./recruiterPage.style"; // Import the provided styles
import { COLORS, FONT, SIZES } from "../../../constants";

const RecruiterPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Recruiter Page</Text>

      {/* Job Details Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Job Title"
          // Add any necessary onChangeText and value props
        />
        <TextInput
          style={styles.input}
          placeholder="Qualifications"
          multiline={true}
          numberOfLines={4}
          // Add any necessary onChangeText and value props
        />
      </View>

      {/* Post Job Button */}
      <TouchableOpacity style={styles.postButton}>
        <Text style={styles.postButtonText}>Post Job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecruiterPage;
