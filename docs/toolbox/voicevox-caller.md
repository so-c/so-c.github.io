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
2. Recotte Studioの [環境設定 > ユーザー定義音声連携の設定] を開く<br>
<a href="../assets/images/recosta_settings.png"><img src="../assets/images/recosta_settings.png" alt="環境設定" style="margin: 0.5em 0; width: 480px"></a>
3. インポートボタンを押し、インストールしたフォルダにある`VOICEVOX(PowerShell 5.x).rvls`を選ぶ<br>
<a href="../assets/images/recosta_user_def.png"><img src="../assets/images/recosta_user_def.png" alt="インポートボタン" style="margin: 0.5em 0; width: 480px"></a>
4. [引数] 欄の`-File ""`のダブルクオーテーション内に、インストールしたフォルダにある`voicevox-caller.ps1`へのフルパスを書き足す<br>
<a href="../assets/images/recosta_args.png"><img src="../assets/images/recosta_args.png" alt="[引数]" style="margin: 0.5em 0; width: 480px"></a>
```text
-ExecutionPolicy Bypass -File "C:\Users\YourName\Documents\voicevox-caller\voicevox-caller.ps1" -text "%c" -speaker "%s" -output "%o"
```
5. [適用] ボタンを押す

### 使用準備

1. 話者レイヤーを追加してプロパティーを開く
1. [話者名] (≠名前) をキャラクター名で始まるように設定する
   * スタイルがあるキャラクタは「四国めたん(ツンツン)」のように指定できます
   
1. [音声連携] でインストールした"VOICEVOX(PoerShell 5.x)" を選ぶ
1. [OK] ボタンを押す<br>
<a href="../assets/images/recosta_speaker_layer.png"><img src="../assets/images/recosta_speaker_layer.png" alt="話者レイヤープロパティー" style="margin: 0.5em 0; width: 480px"></a>

### 使用方法

VOICEVOX, COEIROINKを起動した状態で [音声の同期] をしてください。

### 話者・スタイル一覧

<table>
<tr>
<th style="text-align: center;" colspan="4">VOICEVOX</th>
</tr>
<tr>
    <td>四国めたん</td>
    <td>ずんだもん</td>
    <td>九州そら</td>
    <td></td>
</tr>
<tr>
    <td>春日部つむぎ</td>
    <td>雨晴はう</td>
    <td>波音リツ</td>
    <td></td>
</tr>
<tr>
    <td>黒野玄宏</td>
    <td>白上虎太郎</td>
    <td>青山龍星</td>
    <td>冥鳴ひまり</td>
</tr>
</table>

<table>
    <tr>
        <th style="text-align: center;" colspan="3">COEIROINK</th>
    </tr>
    <tr>
        <td>つくよみちゃん</td>
        <td>MANA</td>
        <td>おふとんP</td>
    </tr>
    <tr>
        <td>ディアちゃん</td>
        <td>アルマちゃん</td>
        <td></td>
    </tr>
</table>

<table>
    <tr>
        <th style="text-align: center;">話者名</th>
        <th style="text-align: center;" colspan="5">スタイル</th>
    </tr>
    <tr>
        <td>四国めたん</td>
        <td>ノーマル</td>
        <td>あまあま</td>
        <td>ツンツン</td>
        <td>セクシー</td>
        <td></td>
    </tr>
    <tr>
        <td>ずんだもん</td>
        <td>ノーマル</td>
        <td>あまあま</td>
        <td>ツンツン</td>
        <td>セクシー</td>
        <td></td>
    </tr>
    <tr>
        <td>九州そら</td>
        <td>ノーマル</td>
        <td>あまあま</td>
        <td>ツンツン</td>
        <td>セクシー</td>
        <td>ささやき</td>
    </tr>
    <tr>
        <td>つくよみちゃん</td>
        <td>おしとやか</td>
        <td>れいせい</td>
        <td>げんき</td>
        <td></td>
        <td></td>
    </tr>
</table>

### 参考動画
<script type="application/javascript" src="https://embed.nicovideo.jp/watch/sm39404090/script?w=720&h=480"></script><noscript><a href="https://www.nicovideo.jp/watch/sm39404090">【2分で教えてついなちゃん♡】レコスタのユーザ定義音声連携でA.I.VOICEやVOICEVOX【Recotte Studio】</a></noscript>

[YouTubeはこちら](https://www.youtube.com/watch?v=N_VCF2ABKA8)

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