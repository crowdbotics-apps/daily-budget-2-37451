import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_733_8830}>
        <View style={styles.View_I733_8830_624_10590}>
          <View style={styles.View_I733_8830_624_10591}>
            <View style={styles.View_I733_8830_624_10592} />
            <View style={styles.View_I733_8830_624_10593}>
              <Text style={styles.Text_I733_8830_624_10593}>Home </Text>
            </View>
            <View style={styles.View_I733_8830_624_10594}>
              <Text style={styles.Text_I733_8830_624_10594}>Profile</Text>
            </View>
            <View style={styles.View_I733_8830_624_10595}>
              <Text style={styles.Text_I733_8830_624_10595}>Budget</Text>
            </View>
            <View style={styles.View_I733_8830_624_10596}>
              <Text style={styles.Text_I733_8830_624_10596}>Articles</Text>
            </View>
            <View style={styles.View_I733_8830_624_10597}>
              <View style={styles.View_I733_8830_624_10597_19_14754}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f7731c7-c79c-4420-8863-db8137419a1f"
                  }}
                  style={styles.ImageBackground_I733_8830_624_10597_19_14755}
                />
              </View>
            </View>
            <View style={styles.View_I733_8830_624_10598}>
              <View style={styles.View_I733_8830_624_10598_19_9727}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6efdce1e-06df-4a9c-89ff-2bea4295847e"
                  }}
                  style={styles.ImageBackground_I733_8830_624_10598_19_9728}
                />
              </View>
            </View>
            <View style={styles.View_I733_8830_624_10599}>
              <View style={styles.View_I733_8830_624_10599_19_16252}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9aa23134-c44b-46ea-914a-b2ddadecb90a"
                  }}
                  style={styles.ImageBackground_I733_8830_624_10599_19_16253}
                />
              </View>
            </View>
            <View style={styles.View_I733_8830_624_10600}>
              <View style={styles.View_I733_8830_624_10600_19_31105}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ad0e6f1-dcc5-42d7-8786-45c22d319521"
                  }}
                  style={styles.ImageBackground_I733_8830_624_10600_19_31106}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I733_8830_624_10601}>
            <View style={styles.View_I733_8830_624_10602} />
            <View style={styles.View_I733_8830_624_10603}>
              <View style={styles.View_I733_8830_624_10603_119_97}>
                <Text style={styles.Text_I733_8830_624_10603_119_97}>4:00</Text>
              </View>
              <View style={styles.View_I733_8830_624_10603_119_98}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96e28c19-42e9-4f96-8d8d-27133af42809"
                  }}
                  style={styles.ImageBackground_I733_8830_624_10603_119_99}
                />
              </View>
              <View style={styles.View_I733_8830_624_10603_119_104}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb014f92-0f2f-4dac-b685-49016e6a6c7d"
                  }}
                  style={styles.ImageBackground_I733_8830_624_10603_119_105}
                />
              </View>
              <View style={styles.View_I733_8830_624_10603_119_109}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/252355fe-d03a-46eb-85ee-5558176f8c63"
                  }}
                  style={styles.ImageBackground_I733_8830_624_10603_119_110}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I733_8830_624_10604}>
            <View style={styles.View_I733_8830_624_10605}>
              <View style={styles.View_I733_8830_624_10606}>
                <View style={styles.View_I733_8830_624_10607} />
                <View style={styles.View_I733_8830_624_10608}>
                  <View style={styles.View_I733_8830_624_10609}>
                    <View style={styles.View_I733_8830_624_10610}>
                      <View style={styles.View_I733_8830_624_10611}>
                        <View style={styles.View_I733_8830_624_10612}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43229ee4-a0bf-4eda-941d-4ed5043b4a5a"
                            }}
                            style={styles.ImageBackground_I733_8830_624_10613}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/261a5969-fdd8-43f8-83e5-817712920013"
                            }}
                            style={styles.ImageBackground_I733_8830_624_10614}
                          />
                          <View style={styles.View_I733_8830_624_10615}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72a113c1-8a28-423b-80bb-c0a51ad315c6"
                              }}
                              style={styles.ImageBackground_I733_8830_624_10616}
                            />
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e452941d-c0d6-49ce-802b-a56a6bb3ac4c"
                              }}
                              style={styles.ImageBackground_I733_8830_624_10619}
                            />
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/322cf086-dd32-4713-8c97-7bf72608b7fe"
                              }}
                              style={styles.ImageBackground_I733_8830_624_10620}
                            />
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99d38250-a3ea-4aa6-9ca6-8865099cb91b"
                              }}
                              style={styles.ImageBackground_I733_8830_624_10621}
                            />
                            <View
                              source={{ uri: "null" }}
                              style={styles.View_I733_8830_624_10622}
                            />
                          </View>
                          <View style={styles.View_I733_8830_624_10623}>
                            <Text style={styles.Text_I733_8830_624_10623}>
                              $100.00
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_624_10624}>
                            <Text style={styles.Text_I733_8830_624_10624}>
                              Daily Spending Limit
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_624_10625}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f263b3e-2f80-420c-82f0-d85e8f7acc92"
                              }}
                              style={
                                styles.ImageBackground_I733_8830_624_10625_19_7707
                              }
                            />
                          </View>
                        </View>
                        <View style={styles.View_I733_8830_624_10626}>
                          <Text style={styles.Text_I733_8830_624_10626}>
                            Total Spent Today
                          </Text>
                        </View>
                        <View style={styles.View_I733_8830_624_10627}>
                          <Text style={styles.Text_I733_8830_624_10627}>
                            $35.00
                          </Text>
                        </View>
                        <View style={styles.View_I733_8830_624_10628}>
                          <Text style={styles.Text_I733_8830_624_10628}>
                            Transactions
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_I733_8830_624_10629}>
                      <View style={styles.View_I733_8830_624_10630}>
                        <View style={styles.View_I733_8830_624_10631}>
                          <View style={styles.View_I733_8830_624_10632}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0cba8a1b-c404-4a0b-966d-69167264d3c8"
                              }}
                              style={styles.ImageBackground_I733_8830_624_10633}
                            />
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbb9562e-728f-412e-891a-e6be36c5755d"
                              }}
                              style={styles.ImageBackground_I733_8830_624_10634}
                            />
                            <View style={styles.View_I733_8830_624_10635}>
                              <View
                                style={styles.View_I733_8830_624_10635_19_12084}
                              >
                                <View
                                  style={
                                    styles.View_I733_8830_624_10635_19_12085
                                  }
                                >
                                  <ImageBackground
                                    source={{
                                      uri:
                                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7208818-70d9-4a71-96a8-1b8be291a3d7"
                                    }}
                                    style={
                                      styles.ImageBackground_I733_8830_624_10635_19_12086
                                    }
                                  />
                                  <ImageBackground
                                    source={{
                                      uri:
                                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8a1de6b-7004-4fe7-bb9a-32445d996339"
                                    }}
                                    style={
                                      styles.ImageBackground_I733_8830_624_10635_19_12087
                                    }
                                  />
                                  <ImageBackground
                                    source={{
                                      uri:
                                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02fd92a7-5fc5-420f-ab3b-5c34de389995"
                                    }}
                                    style={
                                      styles.ImageBackground_I733_8830_624_10635_19_12090
                                    }
                                  />
                                  <View
                                    source={{ uri: "null" }}
                                    style={
                                      styles.View_I733_8830_624_10635_19_12091
                                    }
                                  />
                                </View>
                              </View>
                            </View>
                            <View style={styles.View_I733_8830_624_10636}>
                              <Text style={styles.Text_I733_8830_624_10636}>
                                $40.00
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_624_10637}>
                              <Text style={styles.Text_I733_8830_624_10637}>
                                Saved this week
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_624_10638}>
                              <Text style={styles.Text_I733_8830_624_10638}>
                                $334.31
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_624_10639} />
                            <View style={styles.View_I733_8830_624_10640}>
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/317b52de-d82c-4b19-bbb8-9b9e7338c36c"
                                }}
                                style={
                                  styles.ImageBackground_I733_8830_624_10641
                                }
                              />
                            </View>
                          </View>
                          <View style={styles.View_I733_8830_624_10646}>
                            <Text style={styles.Text_I733_8830_624_10646}>
                              Daily Savings Goal
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_I733_8830_624_10647}>
                      <Text style={styles.Text_I733_8830_624_10647}>
                        See all
                      </Text>
                    </View>
                    <View style={styles.View_I733_8830_624_10648}>
                      <Text style={styles.Text_I733_8830_624_10648}>
                        See all
                      </Text>
                    </View>
                    <View style={styles.View_I733_8830_624_10649} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/641c3cb9-e2a1-49c1-9727-418ecb517e65"
                      }}
                      style={styles.ImageBackground_I733_8830_624_10650}
                    />
                    <TouchableOpacity
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/468278fd-73bd-47eb-82dd-b054783a2279"
                      }}
                      style={styles.TouchableOpacity_I733_8830_624_10662}
                      onPress={() =>
                        this.props.navigation.navigate(
                          getNavigationScreen("624_10750")
                        )
                      }
                    />
                    <View style={styles.View_I733_8830_624_10666}>
                      <Text style={styles.Text_I733_8830_624_10666}>
                        Take control of your life by taking control of your
                        finances
                      </Text>
                    </View>
                    <View style={styles.View_I733_8830_733_6524}>
                      <View style={styles.View_I733_8830_733_6523}>
                        <View style={styles.View_I733_8830_722_7291}>
                          <View style={styles.View_I733_8830_722_7294}>
                            <View style={styles.View_I733_8830_722_7295} />
                            <View style={styles.View_I733_8830_722_7296} />
                            <View style={styles.View_I733_8830_722_7297} />
                            <View style={styles.View_I733_8830_722_7298} />
                            <View style={styles.View_I733_8830_722_7299} />
                            <View style={styles.View_I733_8830_722_7300} />
                            <View style={styles.View_I733_8830_722_7301} />
                          </View>
                          <View style={styles.View_I733_8830_722_7313}>
                            <View style={styles.View_I733_8830_722_7314}>
                              <Text style={styles.Text_I733_8830_722_7314}>
                                10k
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_722_7315}>
                              <Text style={styles.Text_I733_8830_722_7315}>
                                20k
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_722_7316}>
                              <Text style={styles.Text_I733_8830_722_7316}>
                                25k
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_722_7317}>
                              <Text style={styles.Text_I733_8830_722_7317}>
                                30k
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_722_7318}>
                              <Text style={styles.Text_I733_8830_722_7318}>
                                35k
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_722_7319}>
                              <Text style={styles.Text_I733_8830_722_7319}>
                                40k
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_722_7320}>
                              <Text style={styles.Text_I733_8830_722_7320}>
                                45k
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_722_7321}>
                              <Text style={styles.Text_I733_8830_722_7321}>
                                $0
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_722_7322}>
                              <Text style={styles.Text_I733_8830_722_7322}>
                                15k
                              </Text>
                            </View>
                          </View>
                          <View style={styles.View_I733_8830_722_7327}>
                            <Text style={styles.Text_I733_8830_722_7327}>
                              Monday
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_722_7328}>
                            <Text style={styles.Text_I733_8830_722_7328}>
                              Tuesday
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_722_7329}>
                            <Text style={styles.Text_I733_8830_722_7329}>
                              Wednesday
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_722_7330}>
                            <Text style={styles.Text_I733_8830_722_7330}>
                              Thursday
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_722_7331}>
                            <Text style={styles.Text_I733_8830_722_7331}>
                              Friday
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_722_7332}>
                            <Text style={styles.Text_I733_8830_722_7332}>
                              Saturday
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_722_7333}>
                            <Text style={styles.Text_I733_8830_722_7333}>
                              Sunday
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_732_7339}>
                            <Text style={styles.Text_I733_8830_732_7339}>
                              Showing: 7 Days
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_732_7340}>
                            <Text style={styles.Text_I733_8830_732_7340}>
                              Daily Savings
                            </Text>
                          </View>
                        </View>
                        <View style={styles.View_I733_8830_732_7342}>
                          <View style={styles.View_I733_8830_732_7343}>
                            <View style={styles.View_I733_8830_732_7344} />
                            <View style={styles.View_I733_8830_732_7378} />
                            <View style={styles.View_I733_8830_732_7376} />
                            <View style={styles.View_I733_8830_732_7379} />
                            <View style={styles.View_I733_8830_732_7377} />
                            <View style={styles.View_I733_8830_732_7380} />
                            <View style={styles.View_I733_8830_732_7381} />
                          </View>
                          <View style={styles.View_I733_8830_732_7351}>
                            <View style={styles.View_I733_8830_732_7352}>
                              <Text style={styles.Text_I733_8830_732_7352}>
                                10k
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_732_7353}>
                              <Text style={styles.Text_I733_8830_732_7353}>
                                20k
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_732_7354}>
                              <Text style={styles.Text_I733_8830_732_7354}>
                                25k
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_732_7355}>
                              <Text style={styles.Text_I733_8830_732_7355}>
                                30k
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_732_7356}>
                              <Text style={styles.Text_I733_8830_732_7356}>
                                35k
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_732_7357}>
                              <Text style={styles.Text_I733_8830_732_7357}>
                                40k
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_732_7358}>
                              <Text style={styles.Text_I733_8830_732_7358}>
                                45k
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_732_7359}>
                              <Text style={styles.Text_I733_8830_732_7359}>
                                $0
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_732_7360}>
                              <Text style={styles.Text_I733_8830_732_7360}>
                                15k
                              </Text>
                            </View>
                          </View>
                          <View style={styles.View_I733_8830_732_7361}>
                            <Text style={styles.Text_I733_8830_732_7361}>
                              Monday
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_732_7362}>
                            <Text style={styles.Text_I733_8830_732_7362}>
                              Tuesday
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_732_7363}>
                            <Text style={styles.Text_I733_8830_732_7363}>
                              Wednesday
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_732_7364}>
                            <Text style={styles.Text_I733_8830_732_7364}>
                              Thursday
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_732_7365}>
                            <Text style={styles.Text_I733_8830_732_7365}>
                              Friday
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_732_7366}>
                            <Text style={styles.Text_I733_8830_732_7366}>
                              Saturday
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_732_7367}>
                            <Text style={styles.Text_I733_8830_732_7367}>
                              Sunday
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_732_7368}>
                            <Text style={styles.Text_I733_8830_732_7368}>
                              Showing: 7 Days
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_732_7369}>
                            <Text style={styles.Text_I733_8830_732_7369}>
                              Daily Spending
                            </Text>
                          </View>
                        </View>
                        <View style={styles.View_I733_8830_733_6433}>
                          <View style={styles.View_I733_8830_733_6497}>
                            <View style={styles.View_I733_8830_733_6498} />
                            <View style={styles.View_I733_8830_733_6499} />
                            <View style={styles.View_I733_8830_733_6500} />
                            <View style={styles.View_I733_8830_733_6501} />
                            <View style={styles.View_I733_8830_733_6502} />
                            <View style={styles.View_I733_8830_733_6503} />
                          </View>
                          <View style={styles.View_I733_8830_733_6505}>
                            <Text style={styles.Text_I733_8830_733_6505}>
                              Showing: 6 Months
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_733_6506}>
                            <Text style={styles.Text_I733_8830_733_6506}>
                              Monthly Saving
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_733_6507}>
                            <View style={styles.View_I733_8830_733_6508}>
                              <Text style={styles.Text_I733_8830_733_6508}>
                                10k
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_733_6509}>
                              <Text style={styles.Text_I733_8830_733_6509}>
                                20k
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_733_6510}>
                              <Text style={styles.Text_I733_8830_733_6510}>
                                25k
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_733_6511}>
                              <Text style={styles.Text_I733_8830_733_6511}>
                                30k
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_733_6512}>
                              <Text style={styles.Text_I733_8830_733_6512}>
                                35k
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_733_6513}>
                              <Text style={styles.Text_I733_8830_733_6513}>
                                40k
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_733_6514}>
                              <Text style={styles.Text_I733_8830_733_6514}>
                                45k
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_733_6515}>
                              <Text style={styles.Text_I733_8830_733_6515}>
                                $0
                              </Text>
                            </View>
                            <View style={styles.View_I733_8830_733_6516}>
                              <Text style={styles.Text_I733_8830_733_6516}>
                                15k
                              </Text>
                            </View>
                          </View>
                          <View style={styles.View_I733_8830_733_6517}>
                            <Text style={styles.Text_I733_8830_733_6517}>
                              January
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_733_6518}>
                            <Text style={styles.Text_I733_8830_733_6518}>
                              February
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_733_6519}>
                            <Text style={styles.Text_I733_8830_733_6519}>
                              March
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_733_6520}>
                            <Text style={styles.Text_I733_8830_733_6520}>
                              April
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_733_6521}>
                            <Text style={styles.Text_I733_8830_733_6521}>
                              May
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_733_6522}>
                            <Text style={styles.Text_I733_8830_733_6522}>
                              June
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_I733_8830_624_10667}>
                      <View style={styles.View_I733_8830_624_10668}>
                        <View style={styles.View_I733_8830_624_10669}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27c2e8b4-ac18-487c-a435-565c16ec0fdb"
                            }}
                            style={styles.ImageBackground_I733_8830_624_10670}
                          />
                          <View style={styles.View_I733_8830_624_10671}>
                            <Text style={styles.Text_I733_8830_624_10671}>
                              Gas
                            </Text>
                          </View>
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c9f6996-ef6f-40bd-b9b3-f5332fac909f"
                            }}
                            style={styles.ImageBackground_I733_8830_624_10672}
                          />
                          <View style={styles.View_I733_8830_624_10673}>
                            <Text style={styles.Text_I733_8830_624_10673}>
                              Target
                            </Text>
                          </View>
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f15b6399-16ad-4bc6-9993-6977323d004d"
                            }}
                            style={styles.ImageBackground_I733_8830_624_10674}
                          />
                          <View style={styles.View_I733_8830_624_10675}>
                            <Text style={styles.Text_I733_8830_624_10675}>
                              Publix
                            </Text>
                          </View>
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/226e1499-3a2b-485c-bb3d-f917dac600b9"
                            }}
                            style={styles.ImageBackground_I733_8830_624_10676}
                          />
                          <View style={styles.View_I733_8830_624_10677}>
                            <Text style={styles.Text_I733_8830_624_10677}>
                              Olive Garden
                            </Text>
                          </View>
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9cbb6bee-2708-4c27-8730-46325ae1ff13"
                            }}
                            style={styles.ImageBackground_I733_8830_624_10678}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97872c8c-e9f1-4a18-83b8-e9f894363c39"
                            }}
                            style={styles.ImageBackground_I733_8830_624_10679}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/90a832fc-21b3-4027-8e42-5d4b6e5fa65d"
                            }}
                            style={styles.ImageBackground_I733_8830_624_10680}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26534950-b51c-4ad2-b97a-5fee3f0000aa"
                            }}
                            style={styles.ImageBackground_I733_8830_624_10681}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5371c084-ba56-4478-89a4-4d5c39b40d90"
                            }}
                            style={styles.ImageBackground_I733_8830_624_10682}
                          />
                          <View style={styles.View_I733_8830_624_10683}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa401fcf-cf14-4c5c-a46e-056dfe170db8"
                              }}
                              style={styles.ImageBackground_I733_8830_624_10684}
                            />
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0cda903a-8c25-4147-9004-db2c86a31f67"
                              }}
                              style={styles.ImageBackground_I733_8830_624_10687}
                            />
                          </View>
                          <View style={styles.View_I733_8830_624_10696}>
                            <Text style={styles.Text_I733_8830_624_10696}>
                              $80.00
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_624_10697}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05661fdd-f7ff-41f1-bb58-716499f2e06c"
                              }}
                              style={styles.ImageBackground_I733_8830_624_10698}
                            />
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39cf371d-da18-4627-9374-c8fdbe7db161"
                              }}
                              style={styles.ImageBackground_I733_8830_624_10701}
                            />
                          </View>
                          <View style={styles.View_I733_8830_624_10710}>
                            <Text style={styles.Text_I733_8830_624_10710}>
                              $80.00
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_624_10711}>
                            <Text style={styles.Text_I733_8830_624_10711}>
                              Publix
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_624_10712}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/992707dd-e863-4e63-84e9-13d50432058c"
                              }}
                              style={styles.ImageBackground_I733_8830_624_10713}
                            />
                            <ImageBackground
                              source={{
                                uri:
                                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ddd74234-4ee1-4128-ba24-7d242f71746c"
                              }}
                              style={styles.ImageBackground_I733_8830_624_10716}
                            />
                          </View>
                          <View style={styles.View_I733_8830_624_10725}>
                            <Text style={styles.Text_I733_8830_624_10725}>
                              $80.00
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_624_10726}>
                            <Text style={styles.Text_I733_8830_624_10726}>
                              $80.00
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_624_10727}>
                            <Text style={styles.Text_I733_8830_624_10727}>
                              Olive Garden
                            </Text>
                          </View>
                          <View style={styles.View_I733_8830_624_10728}>
                            <Text style={styles.Text_I733_8830_624_10728}>
                              $80.00
                            </Text>
                          </View>
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3f9d0c7-f604-4021-a2f1-7ddbd748fc49"
                            }}
                            style={styles.ImageBackground_I733_8830_624_10729}
                          />
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd5562ff-9ca4-49f6-82ad-8f654e1d7a2b"
                          }}
                          style={styles.ImageBackground_I733_8830_624_10730}
                        />
                        <View style={styles.View_I733_8830_624_10731}>
                          <Text style={styles.Text_I733_8830_624_10731}>
                            $35.00
                          </Text>
                        </View>
                        <View style={styles.View_I733_8830_624_10732}>
                          <Text style={styles.Text_I733_8830_624_10732}>
                            Gas
                          </Text>
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26813830-5787-4168-b6a8-e8969c702841"
                          }}
                          style={styles.ImageBackground_I733_8830_624_10733}
                        />
                        <View style={styles.View_I733_8830_624_10734}>
                          <Text style={styles.Text_I733_8830_624_10734}>
                            $35.00
                          </Text>
                        </View>
                        <View style={styles.View_I733_8830_624_10735}>
                          <Text style={styles.Text_I733_8830_624_10735}>
                            Target
                          </Text>
                        </View>
                        <View style={styles.View_I733_8830_624_10736}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39f52d51-600c-462a-a360-d2915e641192"
                            }}
                            style={styles.ImageBackground_I733_8830_624_10737}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a4a9815-dd41-4516-a7e9-3d8b3d7a8f2d"
                            }}
                            style={styles.ImageBackground_I733_8830_624_10740}
                          />
                        </View>
                        <View style={styles.View_I733_8830_624_10749}>
                          <Text style={styles.Text_I733_8830_624_10749}>
                            $80.00
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("115%") },
  View_733_8830: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("115%"),
    minHeight: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I733_8830_624_10590: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I733_8830_624_10591: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("104%")
  },
  View_I733_8830_624_10592: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(27, 33, 36, 1)"
  },
  View_I733_8830_624_10593: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10593: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_624_10594: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10594: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_624_10595: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10595: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_624_10596: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10596: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_624_10597: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I733_8830_624_10597_19_14754: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I733_8830_624_10597_19_14755: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I733_8830_624_10598: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I733_8830_624_10598_19_9727: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I733_8830_624_10598_19_9728: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I733_8830_624_10599: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I733_8830_624_10599_19_16252: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I733_8830_624_10599_19_16253: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I733_8830_624_10600: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I733_8830_624_10600_19_31105: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I733_8830_624_10600_19_31106: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I733_8830_624_10601: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I733_8830_624_10602: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(27, 33, 36, 1)"
  },
  View_I733_8830_624_10603: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I733_8830_624_10603_119_97: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10603_119_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_624_10603_119_98: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("2%")
  },
  ImageBackground_I733_8830_624_10603_119_99: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I733_8830_624_10603_119_104: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("2%")
  },
  ImageBackground_I733_8830_624_10603_119_105: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I733_8830_624_10603_119_109: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("2%")
  },
  ImageBackground_I733_8830_624_10603_119_110: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I733_8830_624_10604: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I733_8830_624_10605: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I733_8830_624_10606: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("200%"),
    minHeight: hp("200%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I733_8830_624_10607: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I733_8830_624_10608: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("200%"),
    minHeight: hp("200%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I733_8830_624_10609: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("200%"),
    minHeight: hp("200%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    overflow: "hidden"
  },
  View_I733_8830_624_10610: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("12%")
  },
  View_I733_8830_624_10611: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I733_8830_624_10612: {
    width: wp("39%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I733_8830_624_10613: {
    width: wp("39%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I733_8830_624_10614: {
    width: wp("39%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I733_8830_624_10615: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I733_8830_624_10616: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I733_8830_624_10619: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I733_8830_624_10620: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_I733_8830_624_10621: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I733_8830_624_10622: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I733_8830_624_10623: {
    width: wp("24%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10623: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_624_10624: {
    width: wp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10624: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_624_10625: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I733_8830_624_10625_19_7707: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I733_8830_624_10626: {
    width: wp("30%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10626: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_624_10627: {
    width: wp("16%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10627: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_624_10628: {
    width: wp("59%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-18%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10628: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_624_10629: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("12%")
  },
  View_I733_8830_624_10630: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I733_8830_624_10631: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I733_8830_624_10632: {
    width: wp("39%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I733_8830_624_10633: {
    width: wp("39%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I733_8830_624_10634: {
    width: wp("39%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I733_8830_624_10635: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I733_8830_624_10635_19_12084: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I733_8830_624_10635_19_12085: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I733_8830_624_10635_19_12086: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I733_8830_624_10635_19_12087: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I733_8830_624_10635_19_12090: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I733_8830_624_10635_19_12091: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I733_8830_624_10636: {
    width: wp("10%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10636: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_624_10637: {
    width: wp("23%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10637: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_624_10638: {
    width: wp("10%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10638: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_624_10639: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I733_8830_624_10640: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I733_8830_624_10641: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I733_8830_624_10646: {
    width: wp("26%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10646: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_624_10647: {
    width: wp("8%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10647: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_624_10648: {
    width: wp("8%"),
    top: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10648: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_624_10649: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("158%"),
    minHeight: hp("158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("42%"),
    backgroundColor: "rgba(158, 158, 158, 0.10000000149011612)"
  },
  ImageBackground_I733_8830_624_10650: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("158%"),
    minHeight: hp("158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42%")
  },
  TouchableOpacity_I733_8830_624_10662: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I733_8830_624_10666: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("7%"),
    justifyContent: "flex-end"
  },
  Text_I733_8830_624_10666: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_733_6524: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("136%"),
    minHeight: hp("136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("64%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I733_8830_733_6523: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("144%"),
    minHeight: hp("144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I733_8830_722_7291: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(27, 33, 36, 1)",
    overflow: "hidden"
  },
  View_I733_8830_722_7294: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("17%")
  },
  View_I733_8830_722_7295: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_I733_8830_722_7296: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("5%")
  },
  View_I733_8830_722_7297: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%")
  },
  View_I733_8830_722_7298: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%")
  },
  View_I733_8830_722_7299: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("10%")
  },
  View_I733_8830_722_7300: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("14%")
  },
  View_I733_8830_722_7301: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("6%")
  },
  View_I733_8830_722_7313: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("-5%")
  },
  View_I733_8830_722_7314: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_722_7314: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_722_7315: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_722_7315: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_722_7316: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_722_7316: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_722_7317: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_722_7317: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_722_7318: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_722_7318: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_722_7319: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_722_7319: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_722_7320: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_722_7320: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_722_7321: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_722_7321: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_722_7322: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_722_7322: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_722_7327: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("41%"),
    justifyContent: "center"
  },
  Text_I733_8830_722_7327: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_722_7328: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("41%"),
    justifyContent: "center"
  },
  Text_I733_8830_722_7328: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_722_7329: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("41%"),
    justifyContent: "center"
  },
  Text_I733_8830_722_7329: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_722_7330: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("41%"),
    justifyContent: "center"
  },
  Text_I733_8830_722_7330: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_722_7331: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("41%"),
    justifyContent: "center"
  },
  Text_I733_8830_722_7331: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_722_7332: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("41%"),
    justifyContent: "center"
  },
  Text_I733_8830_722_7332: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_722_7333: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("41%"),
    justifyContent: "center"
  },
  Text_I733_8830_722_7333: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_732_7339: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I733_8830_732_7339: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_732_7340: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I733_8830_732_7340: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_732_7342: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49%"),
    backgroundColor: "rgba(27, 33, 36, 1)",
    overflow: "hidden"
  },
  View_I733_8830_732_7343: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("13%")
  },
  View_I733_8830_732_7344: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  View_I733_8830_732_7378: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("9%")
  },
  View_I733_8830_732_7376: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("6%")
  },
  View_I733_8830_732_7379: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("20%")
  },
  View_I733_8830_732_7377: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("0%")
  },
  View_I733_8830_732_7380: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("4%")
  },
  View_I733_8830_732_7381: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("11%")
  },
  View_I733_8830_732_7351: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("-5%")
  },
  View_I733_8830_732_7352: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("42%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_732_7352: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_732_7353: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_732_7353: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_732_7354: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_732_7354: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_732_7355: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_732_7355: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_732_7356: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_732_7356: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_732_7357: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_732_7357: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_732_7358: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_732_7358: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_732_7359: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_732_7359: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_732_7360: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_732_7360: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_732_7361: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("41%"),
    justifyContent: "center"
  },
  Text_I733_8830_732_7361: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_732_7362: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("41%"),
    justifyContent: "center"
  },
  Text_I733_8830_732_7362: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_732_7363: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("41%"),
    justifyContent: "center"
  },
  Text_I733_8830_732_7363: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_732_7364: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("41%"),
    justifyContent: "center"
  },
  Text_I733_8830_732_7364: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_732_7365: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("41%"),
    justifyContent: "center"
  },
  Text_I733_8830_732_7365: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_732_7366: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("41%"),
    justifyContent: "center"
  },
  Text_I733_8830_732_7366: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_732_7367: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("41%"),
    justifyContent: "center"
  },
  Text_I733_8830_732_7367: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_732_7368: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I733_8830_732_7368: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_732_7369: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I733_8830_732_7369: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_733_6433: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99%"),
    backgroundColor: "rgba(27, 33, 36, 1)",
    overflow: "hidden"
  },
  View_I733_8830_733_6497: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("19%")
  },
  View_I733_8830_733_6498: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_I733_8830_733_6499: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("5%")
  },
  View_I733_8830_733_6500: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%")
  },
  View_I733_8830_733_6501: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("0%")
  },
  View_I733_8830_733_6502: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("10%")
  },
  View_I733_8830_733_6503: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("14%")
  },
  View_I733_8830_733_6505: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I733_8830_733_6505: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_733_6506: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I733_8830_733_6506: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_733_6507: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_I733_8830_733_6508: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_733_6508: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_733_6509: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_733_6509: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_733_6510: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_733_6510: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_733_6511: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_733_6511: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_733_6512: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_733_6512: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_733_6513: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_733_6513: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_733_6514: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_733_6514: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_733_6515: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_733_6515: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_733_6516: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_733_6516: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_733_6517: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("43%"),
    justifyContent: "center"
  },
  Text_I733_8830_733_6517: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_733_6518: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("43%"),
    justifyContent: "center"
  },
  Text_I733_8830_733_6518: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_733_6519: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("43%"),
    justifyContent: "center"
  },
  Text_I733_8830_733_6519: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_733_6520: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("43%"),
    justifyContent: "center"
  },
  Text_I733_8830_733_6520: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_733_6521: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("43%"),
    justifyContent: "center"
  },
  Text_I733_8830_733_6521: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_733_6522: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("43%"),
    justifyContent: "center"
  },
  Text_I733_8830_733_6522: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_624_10667: {
    width: wp("95%"),
    height: hp("18%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I733_8830_624_10668: {
    width: wp("206%"),
    minWidth: wp("206%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I733_8830_624_10669: {
    width: wp("206%"),
    minWidth: wp("206%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I733_8830_624_10670: {
    width: wp("22%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I733_8830_624_10671: {
    width: wp("7%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_624_10671: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I733_8830_624_10672: {
    width: wp("22%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_I733_8830_624_10673: {
    width: wp("16%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_624_10673: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I733_8830_624_10674: {
    width: wp("22%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  View_I733_8830_624_10675: {
    width: wp("11%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_624_10675: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I733_8830_624_10676: {
    width: wp("22%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  View_I733_8830_624_10677: {
    width: wp("22%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_624_10677: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I733_8830_624_10678: {
    width: wp("22%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("106%")
  },
  ImageBackground_I733_8830_624_10679: {
    width: wp("22%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("132%")
  },
  ImageBackground_I733_8830_624_10680: {
    width: wp("22%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("158%")
  },
  ImageBackground_I733_8830_624_10681: {
    width: wp("22%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("185%")
  },
  ImageBackground_I733_8830_624_10682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I733_8830_624_10683: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I733_8830_624_10684: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I733_8830_624_10687: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I733_8830_624_10696: {
    width: wp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10696: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_624_10697: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I733_8830_624_10698: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I733_8830_624_10701: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I733_8830_624_10710: {
    width: wp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10710: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_624_10711: {
    width: wp("11%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("164%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_624_10711: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_624_10712: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("165%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I733_8830_624_10713: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I733_8830_624_10716: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I733_8830_624_10725: {
    width: wp("10%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("164%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10725: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_624_10726: {
    width: wp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10726: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_624_10727: {
    width: wp("22%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("185%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_624_10727: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_624_10728: {
    width: wp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("190%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10728: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_I733_8830_624_10729: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("192%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  ImageBackground_I733_8830_624_10730: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_I733_8830_624_10731: {
    width: wp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10731: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_624_10732: {
    width: wp("7%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("113%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_624_10732: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I733_8830_624_10733: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("113%")
  },
  View_I733_8830_624_10734: {
    width: wp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("111%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10734: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I733_8830_624_10735: {
    width: wp("16%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("135%"),
    justifyContent: "flex-start"
  },
  Text_I733_8830_624_10735: {
    color: "rgba(26, 26, 26, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I733_8830_624_10736: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("138%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I733_8830_624_10737: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I733_8830_624_10740: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I733_8830_624_10749: {
    width: wp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("137%"),
    justifyContent: "center"
  },
  Text_I733_8830_624_10749: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
