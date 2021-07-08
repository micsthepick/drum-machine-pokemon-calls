/*
Copyright 2016 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/*
	last modified on 2021-07-08
	by Michael Pannekoek (micsthepick):
	change maxChunks (disable chunks entirely because they are too buggy)
*/ 

var Config = module.exports = {
	isStatsEnabled: false,
	isDebugEnabled: false,
	isAudioDisabled: false,
	isResizeDisabled: false,
	isSplashDisabled: false,
	maxChunks: 1,
	maxChunksMobile: 1,
	domain: "./", 	
	paths: {
		tsne: "meta/",
		audio: "audio/"
	}

};