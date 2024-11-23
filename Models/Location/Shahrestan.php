<?php

namespace Models\Location;

use Illuminate\Database\Eloquent\Model;
use Models\Traits\Base;

class Shahrestan extends Model
{
    use Base;

    protected $table = 'location_shahrestan';
    protected $fillable = ['name', 'province_id', 'amar_code'];

    public function province()
    {
        return $this->belongsTo(Ostan::class, 'province_id', 'id');
    }

    // public function bakhshs()
    // {
    //     return $this->hasMany(Bakhsh::class, 'shahrestan', 'id');
    // }

    // public function dehestans()
    // {
    //     return $this->hasMany(Dehestan::class, 'shahrestan', 'id');
    // }
}
