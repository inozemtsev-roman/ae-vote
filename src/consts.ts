import _ from "lodash";

export const routes = {
  spaces: "/",
  createSpace: "/setup",
  proposal: "/:daoId/proposal/:proposalId",
  editProposal: "/:daoId/proposal/:proposalId/edit",
  space: "/:daoId",
  spaceAbout: "/:daoId/about",
  spaceSettings: "/:daoId/settings",
  createProposal: "/:daoId/create",
};

export const flatRoutes = _.map(routes, (value) => {
  return { path: value };
});

export const TOOLBAR_WIDTH = 60;
export const ZERO_ADDRESS = "EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c";

export const TELETGRAM_URL = "https://t.me/aerlybirds";
export const SUPPORT_URL = "https://t.me/aerlybirds";
export const WHITEPAPER_URL = "https://github.com/aerlybirds";
export const ABOUT_URL = "https://aerlybirds.su";
export const ABOUT_CHARS_LIMIT = 2350;
export const TITLE_LIMIT = 180;

export const MOBILE_WIDTH = 768;

export const ONE_WALLET_ONE_VOTE_URL =
  "https://github.com/aerlybirds/ae-vote?tab=readme-ov-file#supported-strategies";
