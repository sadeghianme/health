import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default class Privacy extends React.Component {
    constructor() {
        super();
    }
    render() {
        // variable
        const styles = StyleSheet.create({
            body: {
                fontSize: 14
            },
            container: {
                padding: 16,
                backgroundColor: "#ececec",
                height: "100%"
            },
            title: {
                fontSize: 16,
                fontWeight: "700",
                paddingBottom: 16
            }
        })
        return (
            <View style={styles.container}>
                <Text style={styles.title}>FitMate Privacy</Text>
                <Text style={styles.title}>Realesed: 2020-08-14</Text>
                <Text style={styles.body}>This policy includes the services (including related incidental services, applications, tools, etc.) provided by Rakuten or a company of the Rakuten group that adopts this policy (hereinafter referred to as "we"*). It is applied when the customer uses. In addition, we and other Rakuten Group companies may decide on the handling of personal information in addition to this policy or separately from this policy depending on the content of the service, etc. Please note that is applied.
                    Rakuten Group wants to provide optimal and unique services to its customers, so that you can easily access the services of Rakuten Group, which is expanding globally, a common ID program that includes a single login function (hereinafter "Rakuten ID). Customers may create an account (hereinafter referred to as "account") based on the Rakuten membership rules and this policy separately set by Rakuten and use the member service (hereinafter referred to as "member service"). I can do it.
                    Please carefully read and agree to this policy along with the Rakuten membership agreement and terms of use for the target service before using the member service or the target service. When you start using the Member Services or the Covered Services, we assume that you understand the content of this Policy, which describes the acquisition, use, provision and storage of your personal information.</Text>
                <Text style={styles.title}>Rakuten Mobile Inc.</Text>
            </View>
        );
    }
}
