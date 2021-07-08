# Copyright 2016 Google Inc.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#     http://www.apache.org/licenses/LICENSE-2.0
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import json

# modified 2021-07-08 by Michael Pannekoek
# changed reference sounds to a randomly selected pokemon from each generation 1 - 6.

with open("./data/analysis.tsv") as analysis_file:
    analyses = analysis_file.read().split("\n")
    G1_like = []
    G2_like = []
    G3_like = []
    G4_like = []
    G5_like = []
    G6_like = []
    for anl in analyses[:-1]:
        row = anl.split("\t")
        row = list(map(float, row))
        G1_like.append(row[0])
        G2_like.append(row[1])
        G3_like.append(row[2])
        G4_like.append(row[3])
        G5_like.append(row[4])
        G6_like.append(row[5])

    most_G1_like = sorted(range(len(G1_like)), key=lambda k: G1_like[k])
    most_G2_like = sorted(range(len(G2_like)), key=lambda k: G2_like[k])
    most_G3_like = sorted(range(len(G3_like)), key=lambda k: G3_like[k])
    most_G4_like = sorted(range(len(G4_like)), key=lambda k: G4_like[k])
    most_G5_like = sorted(range(len(G5_like)), key=lambda k: G5_like[k])
    most_G6_like = sorted(range(len(G6_like)), key=lambda k: G6_like[k])

    output_dict = dict()
    limit = 200
    output_dict["5"] = sorted(most_G6_like[:limit])
    output_dict["4"] = sorted(most_G5_like[:limit])
    output_dict["3"] = sorted(most_G4_like[:limit])
    output_dict["2"] = sorted(most_G3_like[:limit])
    output_dict["1"] = sorted(most_G2_like[:limit])
    output_dict["0"] = sorted(most_G1_like[:limit])
    with open("./data/drum_like.json", "w") as drum_json:
        json.dump(output_dict, drum_json)
