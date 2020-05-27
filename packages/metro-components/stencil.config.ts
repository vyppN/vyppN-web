import { Config } from '@stencil/core';
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
         namespace: "metro-components",
         taskQueue: "async",
         outputTargets: [
           {
             type: "dist",
             esmLoaderPath: "../loader",
           },
           {
             type: "docs-readme",
           },
           {
             type: "www",
           },
         ],
       };
