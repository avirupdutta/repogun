// src/renderer/components/Content.tsx
import React from 'react';

const Content: React.FC = () => {
  return (
    <main style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
      <h3>Generated Project Context:</h3>
      <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
        repogun\ ├── .erb │ ├── configs │ │ ├── .eslintrc │ │ ├──
        webpack.config.base.ts │ │ ├── webpack.config.eslint.ts │ │ ├──
        webpack.config.main.dev.ts │ │ ├── webpack.config.main.prod.ts │ │ ├──
        webpack.config.preload.dev.ts │ │ ├── webpack.config.renderer.dev.dll.ts
        │ │ ├── webpack.config.renderer.dev.ts │ │ ├──
        webpack.config.renderer.prod.ts │ │ └── webpack.paths.ts │ ├── img │ ├──
        mocks │ │ └── fileMock.js │ ├── scripts │ │ ├── .eslintrc │ │ ├──
        check-build-exists.ts │ │ ├── check-native-dep.js │ │ ├──
        check-port-in-use.js │ │ ├── clean.js │ │ ├── delete-source-maps.js │ │
        ├── electron-rebuild.js │ │ ├── link-modules.ts │ │ └── notarize.js │
        ├── .github │ │ ├── ISSUE_TEMPLATE │ │ │ ├── 1-Bug-report.md │ │ │ ├──
        2-Question.md │ │ │ └── 3-Feature_request.md │ │ ├── workflows │ │ │ ├──
        codeql-analysis.yml │ │ │ ├── publish.yml │ │ │ ├── test.yml │ │ │ ├──
        config.yml │ │ │ ├── FUNDING.yml │ │ │ └── stale.yml │ ├── assets │ │
        ├── icons │ │ ├── assets.d.ts │ │ └── entitlements.mac.plist │ └──
        release │ └── app │ └── package.json
      </pre>
      <button style={{ marginTop: '10px' }} type="button">
        Copy All
      </button>
    </main>
  );
};

export default Content;
