#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { EksNginxStack } from '../lib/eks_nginx-stack';

const app = new cdk.App();
new EksNginxStack(app, 'EksNginxStack');
