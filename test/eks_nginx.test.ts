import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import EksNginx = require('../lib/eks_nginx-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new EksNginx.EksNginxStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});