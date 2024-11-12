<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Branches extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
     'name','cities_id'
    ];

    public function permitrequests()
    {
        return $this->belongsTo(PermitRequest::class);
    }
    public function cities() {
        return $this->belongsTo(City::class);
    }
    public function sites() {
        return $this->belongsTo(Sites::class);
    }
}
