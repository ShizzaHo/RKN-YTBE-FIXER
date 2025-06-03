chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: [{
      id: 1,
      priority: 1,
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: "https://www.youtube.com/watch?v=\\1"
        }
      },
      condition: {
        regexFilter: "^https?://youtu\\.be/([\\w-]{11})",
        resourceTypes: ["main_frame"]
      }
    }]
  });
});