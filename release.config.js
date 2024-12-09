export default {
  branches: 'main',
  repositoryUrl: 'https://github.com/DimaFilat/todo-test-action.git',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/npm',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
};
