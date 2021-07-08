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

import os
import librosa
import numpy
from multiprocessing import Pool

# modified 2021-07-08 by Michael Pannekoek
# changed reference sounds to a randomly selected pokemon from each generation 1 - 6.
sample_rate = 48000

    
def scale(arr):
    # get the average
    avg = numpy.average(arr)
    # scale from 20,20000 to 0,1
    return (avg - 20) / (20000 - 20)


def analyse(file):
    print(file)
    y, sr = librosa.load(file, sr=sample_rate, duration=0.25)
    centroid = scale(librosa.feature.spectral_centroid(y=y, sr=sr))
    bandwidth = scale(librosa.feature.spectral_bandwidth(y=y, sr=sr)) 
    # rolloff = scale(librosa.feature.spectral_rolloff(y=y, sr=sr))   
    # contrast = scale(librosa.feature.spectral_contrast(y=y, sr=sr))   
    return numpy.asarray([centroid, bandwidth])


gen1_values = analyse("./ref_sounds/G1.ogg")
gen2_values = analyse("./ref_sounds/G2.ogg")
gen3_values = analyse("./ref_sounds/G3.ogg")
gen4_values = analyse("./ref_sounds/G4.ogg")
gen5_values = analyse("./ref_sounds/G5.ogg")
gen6_values = analyse("./ref_sounds/G6.ogg")

def get_distance(test_values):
    test_values = numpy.asarray(test_values)
    gen1_dist = numpy.linalg.norm(test_values - gen1_values)
    gen2_dist = numpy.linalg.norm(test_values - gen2_values)
    gen3_dist = numpy.linalg.norm(test_values - gen3_values)
    gen4_dist = numpy.linalg.norm(test_values - gen4_values)
    gen5_dist = numpy.linalg.norm(test_values - gen5_values)
    gen6_dist = numpy.linalg.norm(test_values - gen6_values)
    return [gen1_dist, gen2_dist, gen3_dist, gen4_dist, gen5_dist, gen6_dist]

# print get_distance(snare_values)

def process(file_name):
    return get_distance(analyse(file_name))

if __name__ == "__main__":
    with open("./data/filenames.txt") as file_names:
        files = file_names.read().splitlines() 
        limit = None
        results = []
        pool = Pool()
        results = pool.map(process, files[:limit])
        numpy.savetxt("data/analysis.tsv", results, delimiter="\t", fmt="%.6f")