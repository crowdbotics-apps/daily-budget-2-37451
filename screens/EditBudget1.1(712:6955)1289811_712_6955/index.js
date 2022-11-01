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
      <View style={styles.View_712_6956}>
        <View style={styles.View_712_6957}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de23fd86-9229-46c7-944f-bd33e8a4d40c"
            }}
            style={styles.ImageBackground_712_6958}
          />
          <View style={styles.View_712_6959}>
            <View style={styles.View_712_6960} />
            <View style={styles.View_712_6961}>
              <View style={styles.View_I712_6961_119_97}>
                <Text style={styles.Text_I712_6961_119_97}>4:00</Text>
              </View>
              <View style={styles.View_I712_6961_119_98}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0d89002-cbe9-43b8-96ac-95426c5d047a"
                  }}
                  style={styles.ImageBackground_I712_6961_119_99}
                />
              </View>
              <View style={styles.View_I712_6961_119_104}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3687123c-f838-4be5-b1f5-6844d9865f04"
                  }}
                  style={styles.ImageBackground_I712_6961_119_105}
                />
              </View>
              <View style={styles.View_I712_6961_119_109}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1004f408-a561-4a3e-bcb7-a57be4132af1"
                  }}
                  style={styles.ImageBackground_I712_6961_119_110}
                />
              </View>
            </View>
            <View style={styles.View_712_6962}>
              <View style={styles.View_I712_6962_19_13484}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49615c7c-65aa-4168-9241-957ccefcaffc"
                  }}
                  style={styles.ImageBackground_I712_6962_19_13485}
                />
              </View>
            </View>
            <View style={styles.View_712_6963}>
              <View style={styles.View_I712_6963_19_31551}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86d86a1c-5d0d-4c8e-ab3d-639bb31aef47"
                  }}
                  style={styles.ImageBackground_I712_6963_19_31552}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_712_6964}>
            <View style={styles.View_712_6965} />
            <View style={styles.View_712_6966}>
              <Text style={styles.Text_712_6966}>Budget</Text>
            </View>
            <View style={styles.View_712_6967}>
              <View style={styles.View_I712_6967_19_9727}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/886961f9-d2d5-41e5-b3bd-c77dfa49cda2"
                  }}
                  style={styles.ImageBackground_I712_6967_19_9728}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_712_6968}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("624_12322"))
              }
            >
              <View style={styles.View_712_6969}>
                <Text style={styles.Text_712_6969}>Profile</Text>
              </View>
              <View style={styles.View_712_6970}>
                <View style={styles.View_I712_6970_19_14754}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6165f3b-7914-432a-9653-9603dfed3247"
                    }}
                    style={styles.ImageBackground_I712_6970_19_14755}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_712_6971}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("624_12684"))
              }
            >
              <View style={styles.View_712_6972}>
                <Text style={styles.Text_712_6972}>Articles</Text>
              </View>
              <View style={styles.View_712_6973}>
                <View style={styles.View_I712_6973_19_16252}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f912f1d0-22af-434e-8711-c534bf614afb"
                    }}
                    style={styles.ImageBackground_I712_6973_19_16253}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_712_6974}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("733_9124"))
            }
          >
            <View style={styles.View_712_6975}>
              <Text style={styles.Text_712_6975}>Home </Text>
            </View>
            <View style={styles.View_712_6976}>
              <View style={styles.View_I712_6976_19_31105}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4385c25-8eec-415d-b6c7-5f572b345ec9"
                  }}
                  style={styles.ImageBackground_I712_6976_19_31106}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_712_6977}>
        <View style={styles.View_712_6978}>
          <View style={styles.View_712_6979}>
            <View style={styles.View_712_6980} />
            <View style={styles.View_712_6981}>
              <Text style={styles.Text_712_6981}>Expenses</Text>
            </View>
            <View style={styles.View_712_6982}>
              <Text style={styles.Text_712_6982}>Cost</Text>
            </View>
            <View style={styles.View_712_6983} />
            <View style={styles.View_712_6984} />
            <View style={styles.View_712_6985}>
              <Text style={styles.Text_712_6985}>Income</Text>
            </View>
            <View style={styles.View_712_6986}>
              <Text style={styles.Text_712_6986}>$5000</Text>
            </View>
            <View style={styles.View_712_6987}>
              <Text style={styles.Text_712_6987}>$2500 of $5000</Text>
            </View>
            <View style={styles.View_712_6988}>
              <View style={styles.View_I712_6988_19_39128}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f0119cc-36b0-4eac-b160-a9a373dc02ac"
                  }}
                  style={styles.ImageBackground_I712_6988_19_39129}
                />
              </View>
            </View>
            <View style={styles.View_712_6989} />
            <View style={styles.View_712_6990}>
              <Text style={styles.Text_712_6990}>Expenses</Text>
            </View>
            <View style={styles.View_712_6991}>
              <Text style={styles.Text_712_6991}>$4500</Text>
            </View>
            <View style={styles.View_712_6992}>
              <Text style={styles.Text_712_6992}>$4000 of $4500</Text>
            </View>
            <View style={styles.View_712_6993}>
              <View style={styles.View_I712_6993_19_39128}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54d5a02f-c739-45f8-89d6-937b6d9940a1"
                  }}
                  style={styles.ImageBackground_I712_6993_19_39129}
                />
              </View>
            </View>
            <View style={styles.View_712_6994} />
            <View style={styles.View_712_6995}>
              <Text style={styles.Text_712_6995}>Energy</Text>
            </View>
            <View style={styles.View_712_6996}>
              <Text style={styles.Text_712_6996}>$250.00</Text>
            </View>
            <View style={styles.View_712_6997}>
              <Text style={styles.Text_712_6997}>Electric</Text>
            </View>
            <View style={styles.View_712_6998}>
              <Text style={styles.Text_712_6998}>$125.00</Text>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_712_6999}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("712_6706"))
              }
            >
              <View style={styles.View_I712_6999_712_6696}>
                <View style={styles.View_I712_6999_712_6697}>
                  <View style={styles.View_I712_6999_712_6697_19_30744}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54f66634-652a-4336-9a74-14d61006d9db"
                      }}
                      style={styles.ImageBackground_I712_6999_712_6697_19_30745}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I712_6999_712_6693} />
              <View style={styles.View_I712_6999_712_6694}>
                <Text style={styles.Text_I712_6999_712_6694}>Mortgage</Text>
              </View>
              <View style={styles.View_I712_6999_712_6695}>
                <Text style={styles.Text_I712_6999_712_6695}>$2000.00</Text>
              </View>
            </TouchableOpacity>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbc162a5-eadc-4a97-95cc-89d4d0bebe0b"
              }}
              style={styles.ImageBackground_712_7000}
            />
            <TouchableOpacity
              style={styles.TouchableOpacity_712_7001}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("712_6706"))
              }
            >
              <View style={styles.View_I712_7001_712_6696}>
                <View style={styles.View_I712_7001_712_6697}>
                  <View style={styles.View_I712_7001_712_6697_19_30744}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49c41119-f5b1-41b0-ade7-8d41a1a5121e"
                      }}
                      style={styles.ImageBackground_I712_7001_712_6697_19_30745}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I712_7001_712_6693} />
              <View style={styles.View_I712_7001_712_6694}>
                <Text style={styles.Text_I712_7001_712_6694}>Electric</Text>
              </View>
              <View style={styles.View_I712_7001_712_6695}>
                <Text style={styles.Text_I712_7001_712_6695}>$2000.00</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.View_712_7002}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5793e511-6e78-49a2-9fa8-3662fbe1c35d"
                }}
                style={styles.ImageBackground_712_7003}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4ca1bac-eb46-4c7b-b857-2d142bdc5812"
                }}
                style={styles.ImageBackground_712_7006}
              />
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_712_7015}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("712_6706"))
              }
            >
              <View style={styles.View_I712_7015_712_6696}>
                <View style={styles.View_I712_7015_712_6697}>
                  <View style={styles.View_I712_7015_712_6697_19_30744}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5ef004f-5aa9-4194-800a-22da7618263c"
                      }}
                      style={styles.ImageBackground_I712_7015_712_6697_19_30745}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I712_7015_712_6693} />
              <View style={styles.View_I712_7015_712_6694}>
                <Text style={styles.Text_I712_7015_712_6694}>Groceries</Text>
              </View>
              <View style={styles.View_I712_7015_712_6695}>
                <Text style={styles.Text_I712_7015_712_6695}>$2000.00</Text>
              </View>
            </TouchableOpacity>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c23ef81-5532-4232-99a9-eccdc1aab195"
              }}
              style={styles.ImageBackground_712_7016}
            />
            <TouchableOpacity
              style={styles.TouchableOpacity_712_7017}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("712_6706"))
              }
            >
              <View style={styles.View_I712_7017_712_6696}>
                <View style={styles.View_I712_7017_712_6697}>
                  <View style={styles.View_I712_7017_712_6697_19_30744}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/166191a7-8122-41c4-9363-9eb40474e602"
                      }}
                      style={styles.ImageBackground_I712_7017_712_6697_19_30745}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I712_7017_712_6693} />
              <View style={styles.View_I712_7017_712_6694}>
                <Text style={styles.Text_I712_7017_712_6694}>Target</Text>
              </View>
              <View style={styles.View_I712_7017_712_6695}>
                <Text style={styles.Text_I712_7017_712_6695}>$2000.00</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.View_712_7018}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0fe24d0c-6cb5-473f-a8bd-6df41f128201"
                }}
                style={styles.ImageBackground_712_7019}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de16f8a8-ea61-4a8e-ac34-6e20c8798123"
                }}
                style={styles.ImageBackground_712_7022}
              />
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_712_7031}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("712_6706"))
              }
            >
              <View style={styles.View_I712_7031_712_6696}>
                <View style={styles.View_I712_7031_712_6697}>
                  <View style={styles.View_I712_7031_712_6697_19_30744}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1f6be5c-c214-43aa-9bc1-fd5862c6b25c"
                      }}
                      style={styles.ImageBackground_I712_7031_712_6697_19_30745}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I712_7031_712_6693} />
              <View style={styles.View_I712_7031_712_6694}>
                <Text style={styles.Text_I712_7031_712_6694}>Target</Text>
              </View>
              <View style={styles.View_I712_7031_712_6695}>
                <Text style={styles.Text_I712_7031_712_6695}>$2000.00</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.View_712_7032}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59e99b53-f196-4a09-b1dd-37586c709ca7"
                }}
                style={styles.ImageBackground_712_7033}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0087c1a-badc-4fad-8993-c9df1f9a9cb6"
                }}
                style={styles.ImageBackground_712_7036}
              />
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_712_7045}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("712_6706"))
              }
            >
              <View style={styles.View_I712_7045_712_6696}>
                <View style={styles.View_I712_7045_712_6697}>
                  <View style={styles.View_I712_7045_712_6697_19_30744}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/827b4552-031f-4441-a4e5-e33c21c50377"
                      }}
                      style={styles.ImageBackground_I712_7045_712_6697_19_30745}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I712_7045_712_6693} />
              <View style={styles.View_I712_7045_712_6694}>
                <Text style={styles.Text_I712_7045_712_6694}>Kroger</Text>
              </View>
              <View style={styles.View_I712_7045_712_6695}>
                <Text style={styles.Text_I712_7045_712_6695}>$2000.00</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_712_7046}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("712_6706"))
              }
            >
              <View style={styles.View_I712_7046_712_6696}>
                <View style={styles.View_I712_7046_712_6697}>
                  <View style={styles.View_I712_7046_712_6697_19_30744}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e2fbb9e-a148-4157-a718-9b19736f3609"
                      }}
                      style={styles.ImageBackground_I712_7046_712_6697_19_30745}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I712_7046_712_6693} />
              <View style={styles.View_I712_7046_712_6694}>
                <Text style={styles.Text_I712_7046_712_6694}>PGA Store</Text>
              </View>
              <View style={styles.View_I712_7046_712_6695}>
                <Text style={styles.Text_I712_7046_712_6695}>$2000.00</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacity_712_7047}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("712_6706"))
              }
            >
              <View style={styles.View_I712_7047_712_6696}>
                <View style={styles.View_I712_7047_712_6697}>
                  <View style={styles.View_I712_7047_712_6697_19_30744}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c62ce7c-ff3f-48f4-8a75-066b174ba1bf"
                      }}
                      style={styles.ImageBackground_I712_7047_712_6697_19_30745}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I712_7047_712_6693} />
              <View style={styles.View_I712_7047_712_6694}>
                <Text style={styles.Text_I712_7047_712_6694}>Chipotle</Text>
              </View>
              <View style={styles.View_I712_7047_712_6695}>
                <Text style={styles.Text_I712_7047_712_6695}>$2000.00</Text>
              </View>
            </TouchableOpacity>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50665423-bdf5-42e0-b6fb-989117421448"
              }}
              style={styles.ImageBackground_712_7048}
            />
            <TouchableOpacity
              style={styles.TouchableOpacity_712_7049}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("712_6706"))
              }
            >
              <View style={styles.View_I712_7049_712_6696}>
                <View style={styles.View_I712_7049_712_6697}>
                  <View style={styles.View_I712_7049_712_6697_19_30744}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/016a71d7-2519-461e-946b-689887cd81c2"
                      }}
                      style={styles.ImageBackground_I712_7049_712_6697_19_30745}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I712_7049_712_6693} />
              <View style={styles.View_I712_7049_712_6694}>
                <Text style={styles.Text_I712_7049_712_6694}>Gas</Text>
              </View>
              <View style={styles.View_I712_7049_712_6695}>
                <Text style={styles.Text_I712_7049_712_6695}>$2000.00</Text>
              </View>
            </TouchableOpacity>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1058462-97b3-4d26-8f4d-fd5f8d18e511"
              }}
              style={styles.ImageBackground_712_7050}
            />
            <TouchableOpacity
              style={styles.TouchableOpacity_712_7051}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("712_6706"))
              }
            >
              <View style={styles.View_I712_7051_712_6696}>
                <View style={styles.View_I712_7051_712_6697}>
                  <View style={styles.View_I712_7051_712_6697_19_30744}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/380ce8f7-d960-4870-8ae0-4024eb5a85b4"
                      }}
                      style={styles.ImageBackground_I712_7051_712_6697_19_30745}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I712_7051_712_6693} />
              <View style={styles.View_I712_7051_712_6694}>
                <Text style={styles.Text_I712_7051_712_6694}>Electric</Text>
              </View>
              <View style={styles.View_I712_7051_712_6695}>
                <Text style={styles.Text_I712_7051_712_6695}>$2000.00</Text>
              </View>
            </TouchableOpacity>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a377a6b7-83aa-4cb3-89b6-32e6e979a9ef"
              }}
              style={styles.ImageBackground_712_7052}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68f508fc-88d7-4f61-b5bf-3d2440c09cd5"
              }}
              style={styles.ImageBackground_712_7053}
            />
            <TouchableOpacity
              style={styles.TouchableOpacity_712_7054}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("712_6706"))
              }
            >
              <View style={styles.View_I712_7054_712_6696}>
                <View style={styles.View_I712_7054_712_6697}>
                  <View style={styles.View_I712_7054_712_6697_19_30744}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c949a428-81c1-4ad7-a40c-911ce806cdf8"
                      }}
                      style={styles.ImageBackground_I712_7054_712_6697_19_30745}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I712_7054_712_6693} />
              <View style={styles.View_I712_7054_712_6694}>
                <Text style={styles.Text_I712_7054_712_6694}>Water</Text>
              </View>
              <View style={styles.View_I712_7054_712_6695}>
                <Text style={styles.Text_I712_7054_712_6695}>$2000.00</Text>
              </View>
            </TouchableOpacity>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8529f693-3b30-4249-b80f-a809243aa206"
              }}
              style={styles.ImageBackground_712_7055}
            />
            <TouchableOpacity
              style={styles.TouchableOpacity_712_7056}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("712_6706"))
              }
            >
              <View style={styles.View_I712_7056_712_6696}>
                <View style={styles.View_I712_7056_712_6697}>
                  <View style={styles.View_I712_7056_712_6697_19_30744}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/479754e6-b197-4384-917a-05ccb09a03d4"
                      }}
                      style={styles.ImageBackground_I712_7056_712_6697_19_30745}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I712_7056_712_6693} />
              <View style={styles.View_I712_7056_712_6694}>
                <Text style={styles.Text_I712_7056_712_6694}>Gas</Text>
              </View>
              <View style={styles.View_I712_7056_712_6695}>
                <Text style={styles.Text_I712_7056_712_6695}>$2000.00</Text>
              </View>
            </TouchableOpacity>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51d85b11-b7bc-4e6d-b525-e3fb8ebb9703"
              }}
              style={styles.ImageBackground_712_7057}
            />
            <View style={styles.View_712_7058}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2fb3033-484c-4559-b953-866d51519e0e"
                }}
                style={styles.ImageBackground_712_7059}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/150ae954-d793-4458-9d66-bd601005e80f"
                }}
                style={styles.ImageBackground_712_7062}
              />
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
  View_712_6956: {
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
  View_712_6957: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("115%"),
    minHeight: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    overflow: "hidden"
  },
  ImageBackground_712_6958: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    resizeMode: "cover"
  },
  View_712_6959: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_712_6960: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(27, 33, 36, 1)"
  },
  View_712_6961: {
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
  View_I712_6961_119_97: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I712_6961_119_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I712_6961_119_98: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("2%")
  },
  ImageBackground_I712_6961_119_99: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I712_6961_119_104: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("2%")
  },
  ImageBackground_I712_6961_119_105: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I712_6961_119_109: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("2%")
  },
  ImageBackground_I712_6961_119_110: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_712_6962: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_6962_19_13484: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I712_6962_19_13485: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_712_6963: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_6963_19_31551: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I712_6963_19_31552: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_712_6964: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("104%")
  },
  View_712_6965: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(27, 33, 36, 1)"
  },
  View_712_6966: {
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
  Text_712_6966: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_712_6967: {
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
  View_I712_6967_19_9727: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I712_6967_19_9728: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_712_6968: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("2%")
  },
  View_712_6969: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_712_6969: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_712_6970: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_6970_19_14754: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I712_6970_19_14755: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_712_6971: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("2%")
  },
  View_712_6972: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_712_6972: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_712_6973: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_6973_19_16252: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I712_6973_19_16253: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_712_6974: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("107%")
  },
  View_712_6975: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_712_6975: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_712_6976: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_6976_19_31105: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I712_6976_19_31106: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_712_6977: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_712_6978: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("145%"),
    minHeight: hp("145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_712_6979: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("145%"),
    minHeight: hp("145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_712_6980: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(158, 158, 158, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_712_6981: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("29%"),
    justifyContent: "center"
  },
  Text_712_6981: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_712_6982: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("29%"),
    justifyContent: "center"
  },
  Text_712_6982: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_712_6983: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(158, 158, 158, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_712_6984: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_712_6985: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_712_6985: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_712_6986: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_712_6986: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_712_6987: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_712_6987: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_712_6988: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_6988_19_39128: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I712_6988_19_39129: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_712_6989: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    backgroundColor: "rgba(158, 158, 158, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_712_6990: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("11%"),
    justifyContent: "center"
  },
  Text_712_6990: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_712_6991: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("11%"),
    justifyContent: "center"
  },
  Text_712_6991: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_712_6992: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("18%"),
    justifyContent: "center"
  },
  Text_712_6992: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_712_6993: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_6993_19_39128: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I712_6993_19_39129: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_712_6994: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_712_6995: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("45%"),
    justifyContent: "center"
  },
  Text_712_6995: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_712_6996: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("44%"),
    justifyContent: "center"
  },
  Text_712_6996: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_712_6997: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("52%"),
    justifyContent: "center"
  },
  Text_712_6997: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_712_6998: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("52%"),
    justifyContent: "center"
  },
  Text_712_6998: {
    color: "rgba(27, 33, 36, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_712_6999: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_6999_712_6696: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 0, 0, 1)",
    overflow: "hidden"
  },
  View_I712_6999_712_6697: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_6999_712_6697_19_30744: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I712_6999_712_6697_19_30745: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I712_6999_712_6693: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I712_6999_712_6694: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_6999_712_6694: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I712_6999_712_6695: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_6999_712_6695: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_712_7000: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  TouchableOpacity_712_7001: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_7001_712_6696: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 0, 0, 1)",
    overflow: "hidden"
  },
  View_I712_7001_712_6697: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_7001_712_6697_19_30744: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I712_7001_712_6697_19_30745: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I712_7001_712_6693: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I712_7001_712_6694: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_7001_712_6694: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I712_7001_712_6695: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_7001_712_6695: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_712_7002: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("52%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_712_7003: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_712_7006: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_712_7015: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_7015_712_6696: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 0, 0, 1)",
    overflow: "hidden"
  },
  View_I712_7015_712_6697: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_7015_712_6697_19_30744: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I712_7015_712_6697_19_30745: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I712_7015_712_6693: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I712_7015_712_6694: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_7015_712_6694: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I712_7015_712_6695: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_7015_712_6695: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_712_7016: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("60%"),
    resizeMode: "cover"
  },
  TouchableOpacity_712_7017: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_7017_712_6696: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 0, 0, 1)",
    overflow: "hidden"
  },
  View_I712_7017_712_6697: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_7017_712_6697_19_30744: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I712_7017_712_6697_19_30745: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I712_7017_712_6693: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I712_7017_712_6694: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_7017_712_6694: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I712_7017_712_6695: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_7017_712_6695: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_712_7018: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("69%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_712_7019: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_712_7022: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_712_7031: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("74%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_7031_712_6696: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 0, 0, 1)",
    overflow: "hidden"
  },
  View_I712_7031_712_6697: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_7031_712_6697_19_30744: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I712_7031_712_6697_19_30745: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I712_7031_712_6693: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I712_7031_712_6694: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_7031_712_6694: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I712_7031_712_6695: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_7031_712_6695: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_712_7032: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_712_7033: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_712_7036: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_712_7045: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("82%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_7045_712_6696: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 0, 0, 1)",
    overflow: "hidden"
  },
  View_I712_7045_712_6697: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_7045_712_6697_19_30744: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I712_7045_712_6697_19_30745: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I712_7045_712_6693: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I712_7045_712_6694: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_7045_712_6694: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I712_7045_712_6695: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_7045_712_6695: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_712_7046: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("123%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_7046_712_6696: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 0, 0, 1)",
    overflow: "hidden"
  },
  View_I712_7046_712_6697: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_7046_712_6697_19_30744: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I712_7046_712_6697_19_30745: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I712_7046_712_6693: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I712_7046_712_6694: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_7046_712_6694: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I712_7046_712_6695: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_7046_712_6695: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_712_7047: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("115%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_7047_712_6696: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 0, 0, 1)",
    overflow: "hidden"
  },
  View_I712_7047_712_6697: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_7047_712_6697_19_30744: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I712_7047_712_6697_19_30745: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I712_7047_712_6693: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I712_7047_712_6694: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_7047_712_6694: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I712_7047_712_6695: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_7047_712_6695: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_712_7048: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("118%"),
    resizeMode: "cover"
  },
  TouchableOpacity_712_7049: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_7049_712_6696: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 0, 0, 1)",
    overflow: "hidden"
  },
  View_I712_7049_712_6697: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_7049_712_6697_19_30744: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I712_7049_712_6697_19_30745: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I712_7049_712_6693: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I712_7049_712_6694: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_7049_712_6694: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I712_7049_712_6695: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_7049_712_6695: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_712_7050: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  TouchableOpacity_712_7051: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("90%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_7051_712_6696: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 0, 0, 1)",
    overflow: "hidden"
  },
  View_I712_7051_712_6697: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_7051_712_6697_19_30744: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I712_7051_712_6697_19_30745: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I712_7051_712_6693: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I712_7051_712_6694: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_7051_712_6694: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I712_7051_712_6695: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_7051_712_6695: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_712_7052: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_712_7053: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("85%"),
    resizeMode: "cover"
  },
  TouchableOpacity_712_7054: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_7054_712_6696: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 0, 0, 1)",
    overflow: "hidden"
  },
  View_I712_7054_712_6697: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_7054_712_6697_19_30744: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I712_7054_712_6697_19_30745: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I712_7054_712_6693: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I712_7054_712_6694: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_7054_712_6694: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I712_7054_712_6695: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_7054_712_6695: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_712_7055: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  TouchableOpacity_712_7056: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("107%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_7056_712_6696: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("0%"),
    backgroundColor: "rgba(229, 0, 0, 1)",
    overflow: "hidden"
  },
  View_I712_7056_712_6697: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I712_7056_712_6697_19_30744: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I712_7056_712_6697_19_30745: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I712_7056_712_6693: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 244, 250, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I712_7056_712_6694: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_7056_712_6694: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I712_7056_712_6695: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I712_7056_712_6695: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_712_7057: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_712_7058: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("126%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_712_7059: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_712_7062: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
