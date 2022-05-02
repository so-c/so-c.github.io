---
layout: default
---

# voicevox-caller

[VOICEVOX](https://voicevox.hiroshiba.jp/), [COEIROINK](https://coeiroink.com/)の音声合成エンジンを呼ぶためのWindows PowerShellスクリプトです。[Recotte Studioの「ユーザー定義音声機能」](https://youtu.be/dB5rDhiPMmQ)に使用できます

## 使用例

```ps1
> .\voicevox-caller.ps1 -speaker "四国めたん(ツンツン)" -text "わたくしは漆黒のめたんですわ" -output shikkoku.wav
```
※PowerShellの詳しい使い方についてはここでは説明しません

## Recotte Studioの「ユーザー定義音声機能」での使い方

### インストール手順

1. [Releaseページ](https://github.com/so-c/soc-toolbox/releases)から`voicecox-caller-vX.Y.Z.a.zip`をダウンロードして好きなフォルダに展開する
2. Recotte Studioの [環境設定 > ユーザー定義音声連携の設定] を開く
3. インポートボタンを押し、インストールしたフォルダにある`VOICEVOX(PowerShell 5.x).rvls`を選ぶ
4. [引数] 欄の`-File ""`のダブルクオーテーション内に、インストールしたフォルダにある`voicevox-caller.ps1`へのフルパスを書き足す
5. [適用] ボタンを押す

[引数]の設定例

```text
-ExecutionPolicy Bypass -File "C:\Users\YourName\Documents\voicevox-caller\voicevox-caller.ps1" -text "%c" -speaker "%s" -output "%o"
```

### 使用準備

1. 話者レイヤーを追加してプロパティーを開く
1. [話者名] (≠名前) をキャラクター名で始まるように設定する
   * スタイルがあるキャラクタは「四国めたん(ツンツン)」のように指定できます
1. [音声連携] でインストールした"VOICEVOX(PoerShell 5.x)" を選ぶ
1. [OK] ボタンを押す

### 話者一覧

| VOICEVOX ||||
| --- | --- | --- | --- |
| 四国めたん | ずんだもん | 九州そら | |
| 春日部つむぎ | 雨晴はう | 波音リツ | |
| 黒野玄宏 | 白上虎太郎 | 青山龍星 | 冥鳴ひまり | 

|COEIROINK |||
| --- | --- | --- |
| つくよみちゃん | MANA | おふとんP |
| ディアちゃん | アルマちゃん | |

【スタイル一覧】

| 四国めたん | ずんだもん | 九州そら | つくよみちゃん |
| --- | --- | --- | --- | 
|ノーマル|ノーマル|ノーマル|れいせい|
|あまあま|あまあま|あまあま|おしとやか|
|ツンツン|ツンツン|ツンツン|げんき|
|セクシー|セクシー|セクシー||
|||ささやき||

### 使用方法

VOICEVOX, COEIROINKを起動した状態で [音声の同期] をしてください。

### 参考動画
[![参考動画](https://img.youtube.com/vi/N_VCF2ABKA8/0.jpg)](https://www.youtube.com/watch?v=N_VCF2ABKA8)

[Recotte Studio（レコスタ）ユーザー定義音声連携 \- YouTube](https://www.youtube.com/watch?v=N_VCF2ABKA8)

### TIPS

* 音声が作成されない場合は`voicevox-caler.ps1`と同じフォルダの`last_error.txt`を確認してみてください。最後に発生したエラーが出力されています
* このスクリプトはWindowsに最初からインストールされてるWindows PowerShell ISEで変更・動作確認できます。好みに合わせてカスタマイズしてください

### 利用できる引数

#### 必須引数

| 引数名 | 説明 |
|:--|:--|
|spekaer|キャラクター名（感情）|
|text|喋らせたいテキスト|
|out|出力ファイル名|

#### オプション引数

| 引数名 | 説明 | デフォルト値 |
|:--|:--|:--:|
|speedScale|話速|1.0|
|pitchScale|音高|0.1|
|intonationScale|抑揚|1.0|
|volumeScale|音量|1.0|
|prePhonemeLength|開始無音|0.1|
|postPhonemeLength|終了無音|0.1|
|outputSamplingRate|音声のサンプリングレート|48000 (48kHz)|
|$outputStereo|音声をステレオ化|false|

### 利用規約

* ユーザ向け
  * 本スクリプトはインターネット全般で非商用・商用問わず利用できます
  * Recotte StudioやVOICEVOX、各キャラクターの利用規約に従ってください
  * ニコニコ動画で使う際はニコニ･コモンズの [voicevox\-caller](https://commons.nicovideo.jp/material/nc252957) のコンテンツツリー登録にご協力ください
* 開発者向け
  * スクリプト本体は[MIT License](https://github.com/so-c/soc-toolbox/blob/main/LICENSE)です
