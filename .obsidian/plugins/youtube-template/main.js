/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => YoutubeTemplatePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian6 = require("obsidian");

// src/modals/insert-template.ts
var import_obsidian4 = require("obsidian");

// src/utils/file.ts
var import_obsidian = require("obsidian");
function findTFile(filepath, app) {
  const abstractFile = app.vault.getAbstractFileByPath(filepath);
  return abstractFile instanceof import_obsidian.TFile ? abstractFile : null;
}
function getAllTFolders(element) {
  let folders = [];
  if (element instanceof import_obsidian.TFolder) {
    folders.push(element);
    for (const child of element.children) {
      folders = folders.concat(getAllTFolders(child));
    }
  }
  return folders;
}

// src/utils/parser.ts
var import_obsidian2 = require("obsidian");
function parseVideoId(url) {
  const regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
  const result = regex.exec(url);
  return result ? result[3] : null;
}
function parseChapters(description) {
  const lines = description.split("\n");
  const regex = /(\d{0,2}:?\d{1,2}:\d{2})/g;
  const chapters = [];
  for (const line of lines) {
    const matches = line.match(regex);
    if (matches) {
      const ts = matches[0];
      const title = line.split(" ").filter((l) => !l.includes(ts)).join(" ");
      chapters.push({
        timestamp: ts,
        title
      });
    }
  }
  return chapters;
}
function parseISODuration(data) {
  const duration = import_obsidian2.moment.duration(data);
  return `${duration.hours() > 0 ? duration.hours() + ":" : ""}${duration.minutes()}:${duration.seconds()}`;
}
function filterFilename(text) {
  return text.replace(/[/\\?%*:|"<>]/g, "");
}
function filterStringData(text) {
  return text.replace(/"(.*?)"/g, "\xAB$1\xBB").replace(/["]/g, "");
}
function parseAttachmentFolder(folder) {
  folder = folder.trim();
  folder = folder.startsWith(".") ? folder.replace(".", "") : folder;
  return folder === "" ? "/" : folder;
}

// src/apis/youtube.ts
var import_obsidian3 = require("obsidian");

// src/utils/constants.ts
var NO_VIDEO_ERROR = "No video found";
var NO_CHANNEL_ERROR = "No video found";
var NO_INTERNET_ERROR = "No internet connection";
var WRONG_API_KEY_ERROR = "API key is wrong";
var NO_INTERNET_CATCHING_ERROR = "net::ERR_INTERNET_DISCONNECTED";
var ROOT_FOLDER = "/";
var DEFAULT_CHAPTER_FORMAT = ' - "{{chapter}}"\n';
var DEFAULT_HASHTAG_FORMAT = ' - "#{{hashtag}}"\n';
var DEFAULT_TEMPLATE = `---
tags:
  - type/youtube
aliases: 
title: "{{title}}"
channel_name: "{{channelName}}"
subscribers: {{subscribers}}
length: "{{length}}"
publish_date: "{{publishDate}}"
chapters: 
{{chapters}}
hashtags: 
{{hashtags}}
thumbnail: "![[{{thumbnail}}]]"
description: "{{description}}"
note_created: "{{noteCreated}}"
youtube_url: "{{youtubeUrl}}"
template-type: "YouTube"
template-version: "1.0"
---

![[{{thumbnail}}]]

<iframe title="{{title}}" src="https://www.youtube.com/embed/{{id}}?feature=oembed" height="113" width="200" style="aspect-ratio: 1.76991 / 1; width: 100%; height: 100%;" allowfullscreen="" allow="fullscreen"></iframe>


# \u{1F30D} What It's About
- 

# \u{1F50D} How I Discovered IT
- 

# \u{1F9E0} Thoughts
- 

## What I Liked About IT
- 

## What I Didn't Like About it
- 

# \u270D\uFE0F The Video in 3 Sentences

# \u270D\uFE0F My Top 3 Quotes

# \u{1F3A8} Impressions

# \u2618\uFE0F How the Video Changed Me

# \u{1F4D2} Summary + Notes

# \u{1F970} Who Would Like it ?
- 

# \u{1F4DA}Related Videos
-  
`;

// src/apis/youtube.ts
var baseUrlForVideos = "https://www.googleapis.com/youtube/v3/videos?";
var baseUrlForChannels = "https://www.googleapis.com/youtube/v3/channels?";
async function getVideoData(videoUrl, settings, downloadThumbnail) {
  var _a, _b;
  let thumbnailLink = "";
  try {
    const videoResponse = await (0, import_obsidian3.requestUrl)(
      baseUrlForVideos + `part=snippet,contentDetails&id=${parseVideoId(videoUrl)}&key=${settings.googleCloudApiKey}`
    ).json;
    if (videoResponse.items.length === 0) {
      throw new Error(NO_VIDEO_ERROR);
    }
    const channelsResponse = await (0, import_obsidian3.requestUrl)(
      baseUrlForChannels + `part=statistics&id=${videoResponse.items[0].snippet.channelId}&key=${settings.googleCloudApiKey}`
    ).json;
    if (channelsResponse.items.length === 0) {
      throw new Error(NO_CHANNEL_ERROR);
    }
    console.log(videoResponse);
    console.log(channelsResponse);
    if (downloadThumbnail) {
      const thumbnails = videoResponse.items[0].snippet.thumbnails;
      thumbnailLink = (_a = await downloadVideoThumbnail(this.app, Object.values(videoResponse.items[0].snippet.thumbnails))) != null ? _a : "";
    }
    return {
      id: videoResponse.items[0].id,
      title: filterStringData(videoResponse.items[0].snippet.title),
      channelName: filterStringData(videoResponse.items[0].snippet.channelTitle),
      subscribers: parseInt(channelsResponse.items[0].statistics.subscriberCount),
      length: parseISODuration(videoResponse.items[0].contentDetails.duration),
      //@ts-ignore
      publishDate: moment(videoResponse.items[0].snippet.publishedAt).format("YYYY-MM-DD"),
      thumbnail: thumbnailLink != null ? thumbnailLink : "",
      chapters: parseChapters(videoResponse.items[0].snippet.description).map(
        (chapter) => `${chapter.timestamp} ${filterStringData(chapter.title)}`
      ),
      hashtags: (_b = videoResponse.items[0].snippet.tags) != null ? _b : [],
      description: "",
      //@ts-ignore
      noteCreated: moment().format("YYYY-MM-DD, HH:mm"),
      youtubeUrl: videoUrl
    };
  } catch (error) {
    if ((error == null ? void 0 : error.message) === NO_INTERNET_CATCHING_ERROR) {
      throw new Error(NO_INTERNET_ERROR);
    } else if ((error == null ? void 0 : error.status) && error.status.toString().startsWith("4")) {
      throw new Error(WRONG_API_KEY_ERROR);
    }
    throw Error((error == null ? void 0 : error.message) ? error.message : error);
  }
}
async function downloadVideoThumbnail(app, availableThumbnaisl) {
  let bestThumbnailIdx = 0;
  for (let i = 1; i < availableThumbnaisl.length; i++) {
    if (availableThumbnaisl[i].width > availableThumbnaisl[bestThumbnailIdx].width) {
      bestThumbnailIdx = i;
    }
  }
  const imageUrl = availableThumbnaisl[bestThumbnailIdx].url;
  const response = await (0, import_obsidian3.requestUrl)(imageUrl);
  const filename = `${new Date().getTime()}.${imageUrl.split(".").pop()}`;
  const abstractFile = this.app.vault.getAbstractFileByPath(parseAttachmentFolder(app.vault.getConfig("attachmentFolderPath")));
  if (!(abstractFile instanceof import_obsidian3.TFolder)) {
    throw new Error(`Attachment folder '${app.vault.getConfig("attachmentFolderPath")}' does not exist. Check if the folder path is correct in your Settings \u2192 Files and links \u2192 Default location for new attachments.`);
  }
  await app.vault.createBinary(`${app.vault.getConfig("attachmentFolderPath")}/${filename}`, response.arrayBuffer);
  return filename;
}

// src/utils/templater.ts
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, "g"), replace);
}
function processTemplateKey(key, videoData, settings) {
  switch (key) {
    case "chapters":
      return videoData.chapters.map((chapter) => replaceAll(settings.chapterFormat, "{{chapter}}", chapter)).join("");
    case "hashtags":
      return videoData.hashtags.map((hashtag) => replaceAll(settings.hashtagFormat, "{{hashtag}}", hashtag)).join("");
    default:
      return key in videoData ? videoData[key].toString() : "";
  }
}
function processTemplate(videoData, settings) {
  let template = settings.template;
  Object.keys(videoData).forEach((key) => {
    template = replaceAll(template, `{{${key}}}`, processTemplateKey(key, videoData, settings));
  });
  return template;
}

// src/modals/insert-template.ts
var errorContainerId = "insert-template-modal__error";
var InsertTemplateModal = class extends import_obsidian4.Modal {
  constructor(app, plugin) {
    super(app);
    this.videoUrl = "";
    this.onSubmitClick = async () => {
      if (this.videoUrl.length < 11) {
        this.setErrorMessage(this.contentEl, "Please enter a valid URL (should be at least 11 characters)");
        return;
      }
      try {
        const downloadVideoThumbnail2 = this.plugin.settings.template.contains("{{thumbnail}}");
        const data = await getVideoData(this.videoUrl, this.plugin.settings, downloadVideoThumbnail2);
        if (!this.app.vault.getAbstractFileByPath(this.plugin.settings.folder)) {
          throw new Error(`Folder '${this.plugin.settings.folder}' does not exist`);
        }
        const filepath = (0, import_obsidian4.normalizePath)(`${this.plugin.settings.folder}/${filterFilename(data.title)}.md`);
        if (findTFile(filepath, this.app)) {
          new import_obsidian4.Notice(`File ${filepath} already exists`);
        } else {
          await this.app.vault.create(filepath, processTemplate(data, this.plugin.settings));
          const abstractFile = findTFile(filepath, this.app);
          if (abstractFile) {
            this.app.workspace.getLeaf().openFile(abstractFile);
          } else {
            new import_obsidian4.Notice(`Failed to create ${filepath}`);
          }
        }
        this.close();
      } catch (error) {
        switch (error == null ? void 0 : error.message) {
          case NO_VIDEO_ERROR:
            this.setErrorMessage(this.contentEl, "No video found with the given URL");
            break;
          case NO_CHANNEL_ERROR:
            this.setErrorMessage(this.contentEl, "No channel was found with the provided video URL");
            break;
          case NO_INTERNET_ERROR:
            this.setErrorMessage(this.contentEl, "Please check your internet connection");
            break;
          case WRONG_API_KEY_ERROR:
            this.setErrorMessage(this.contentEl, "Please check the API key in the settings");
            break;
          default:
            this.setErrorMessage(this.contentEl, `Unexpected error: ${error == null ? void 0 : error.message}`);
            break;
        }
      }
    };
    this.onEnterKeyPressing = (e) => {
      if (e.key === "Enter") {
        this.onSubmitClick();
      }
    };
    this.setErrorMessage = (contentEl, message) => {
      const errorContainer = contentEl.querySelector(`#${errorContainerId}`);
      if (errorContainer) {
        errorContainer.textContent = message;
      }
    };
    this.plugin = plugin;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.classList.add("youtube-template-plugin");
    contentEl.createEl("h1", { text: "\u{1F517} Insert Template" });
    contentEl.addEventListener("keydown", this.onEnterKeyPressing);
    contentEl.createDiv({ cls: "insert-template-modal__input" }, (settingItem) => {
      new import_obsidian4.TextComponent(settingItem).setValue(this.videoUrl).setPlaceholder("URL of the video").onChange((value) => this.videoUrl = value);
    });
    const buttonContainer = contentEl.createDiv({ cls: "insert-template-modal__button-container" });
    contentEl.appendChild(buttonContainer);
    new import_obsidian4.Setting(buttonContainer).addButton((btn) => btn.setButtonText("Insert (or press Enter)").setCta().onClick(this.onSubmitClick));
    const errorContainer = contentEl.createDiv({
      cls: "insert-template-modal__error-container",
      attr: { id: errorContainerId }
    });
    contentEl.appendChild(errorContainer);
  }
  onClose() {
    const { contentEl } = this;
    contentEl.removeEventListener("keydown", this.onEnterKeyPressing);
    contentEl.empty();
  }
};

// src/settings.ts
var import_obsidian5 = require("obsidian");
var DEFAULT_SETTINGS = {
  googleCloudApiKey: "",
  folder: ROOT_FOLDER,
  template: DEFAULT_TEMPLATE,
  chapterFormat: DEFAULT_CHAPTER_FORMAT,
  hashtagFormat: DEFAULT_HASHTAG_FORMAT
};
var YouTubeTemplatePluginSettingsTab = class extends import_obsidian5.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian5.Setting(containerEl).setName("Google Cloud API Key").setDesc(
      "It's a secret API key that you can get from Google Cloud Console (https://console.cloud.google.com/apis/credentials)"
    ).addText(
      (text) => text.setPlaceholder("Enter your API key").setValue(this.plugin.settings.googleCloudApiKey).onChange(async (value) => {
        this.plugin.settings.googleCloudApiKey = value;
        await this.plugin.saveSettings();
      })
    );
    const rootFolder = this.app.vault.getAbstractFileByPath("/");
    const folders = getAllTFolders(rootFolder);
    const folderOptions = Object.fromEntries(folders.map((folder) => [folder.path, folder.path]));
    new import_obsidian5.Setting(containerEl).setName("Folder to save the templates").setDesc(
      "Choose the folder where you want to save the templates. The default value is the root folder of your vault."
    ).addDropdown(
      (dropdown) => dropdown.addOptions(folderOptions).setValue(this.plugin.settings.folder).onChange(async (value) => {
        this.plugin.settings.folder = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian5.Setting(containerEl).setName("Chapter format").setDesc("Make the template that will be used to insert chapters. You can use the following variables: {{chapter}}.").addTextArea(
      (text) => text.setPlaceholder(DEFAULT_CHAPTER_FORMAT).setValue(this.plugin.settings.chapterFormat).onChange(async (value) => {
        this.plugin.settings.chapterFormat = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian5.Setting(containerEl).setName("Hashtag format").setDesc("Make the template that will be used to insert hashtags. You can use the following variables: {{hashtag}}.").addTextArea(
      (text) => text.setPlaceholder(DEFAULT_HASHTAG_FORMAT).setValue(this.plugin.settings.hashtagFormat).onChange(async (value) => {
        this.plugin.settings.hashtagFormat = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian5.Setting(containerEl).setName("Template").setDesc(
      "Make the template that will be used to create the note. You can use the following variables: {{title}}, {{channelName}}, {{subscribers}}, {{length}}, {{publishDate}}, {{thumbnail}}, {{chapters}}, {{hashtags}}, {{description}}, {{noteCreated}}, {{youtubeUrl}}."
    ).addTextArea(
      (text) => text.setValue(this.plugin.settings.template).onChange(async (value) => {
        this.plugin.settings.template = value;
        await this.plugin.saveSettings();
      })
    ).setClass("youtube-template-plugin__template-textarea");
  }
};

// src/main.ts
var YoutubeTemplatePlugin = class extends import_obsidian6.Plugin {
  async onload() {
    await this.loadSettings();
    this.addSettingTab(new YouTubeTemplatePluginSettingsTab(this.app, this));
    this.addCommand({
      id: "youtube-insert-template",
      name: "Insert template",
      callback: () => {
        new InsertTemplateModal(this.app, this).open();
      }
    });
  }
  onunload() {
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
